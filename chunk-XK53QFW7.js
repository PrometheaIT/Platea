import {
  BaseService
} from "./chunk-QSRXFII6.js";
import {
  BehaviorSubject,
  Injectable,
  combineLatest,
  firstValueFrom,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-T3MDKIO5.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-TWWAJFRB.js";

// src/app/services/task.service.ts
var TaskService = class _TaskService extends BaseService {
  getTableName() {
    return "tasks";
  }
  // ─── State aggiuntivo ──────────────────────────────────────────────────────
  subtasksSubject = new BehaviorSubject([]);
  detailsSubject = new BehaviorSubject([]);
  roleAssignmentsSubject = new BehaviorSubject([]);
  userAssignmentsSubject = new BehaviorSubject([]);
  roleAssignments$ = this.roleAssignmentsSubject.asObservable();
  userAssignments$ = this.userAssignmentsSubject.asObservable();
  subtasks$ = this.subtasksSubject.asObservable();
  details$ = this.detailsSubject.asObservable();
  /**
   * Observable della gerarchia completa Task → Sotto-task → Dettagli.
   * Viene ricalcolato ogni volta che uno dei tre subject cambia.
   */
  tasksView$ = combineLatest([
    this.data$,
    this.subtasks$,
    this.details$,
    this.roleAssignments$,
    this.userAssignments$
  ]).pipe(map(([tasks, subtasks, details, roleAssignments, userAssignments]) => this.buildHierarchy(tasks, subtasks, details, roleAssignments, userAssignments)));
  // ─── Override loadData (carica anche subtask e dettagli) ──────────────────
  loadData(additionalFilters) {
    return __async(this, null, function* () {
      yield __superGet(_TaskService.prototype, this, "loadData").call(this, additionalFilters);
      yield Promise.all([
        this.loadSubtasks(),
        this.loadDetails(),
        this.loadRoleAssignments(),
        this.loadUserAssignments()
      ]);
    });
  }
  loadUserAssignments() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId) {
        this.userAssignmentsSubject.next([]);
        return;
      }
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").select(`
          *,
          user:users!task_user_assignments_user_id_fkey (
            id, first_name, last_name
          )
        `).eq("restaurant_id", restaurantId));
      if (!error)
        this.userAssignmentsSubject.next(data ?? []);
    });
  }
  // ─── Caricamento subtask ───────────────────────────────────────────────────
  loadSubtasks() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId) {
        this.subtasksSubject.next([]);
        return;
      }
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_subtasks").select("*").eq("restaurant_id", restaurantId).order("priority", { ascending: false }));
      if (!error)
        this.subtasksSubject.next(data ?? []);
    });
  }
  loadRoleAssignments() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId) {
        this.roleAssignmentsSubject.next([]);
        return;
      }
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").select("*").eq("restaurant_id", restaurantId));
      if (!error)
        this.roleAssignmentsSubject.next(data ?? []);
    });
  }
  // ─── Caricamento dettagli ──────────────────────────────────────────────────
  loadDetails() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId) {
        this.detailsSubject.next([]);
        return;
      }
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_details").select("*").eq("restaurant_id", restaurantId).order("created_at", { ascending: true }));
      if (!error)
        this.detailsSubject.next(data ?? []);
    });
  }
  // ─── Costruzione gerarchia ─────────────────────────────────────────────────
  buildHierarchy(tasks, subtasks, details, roleAssignments, userAssignments) {
    return tasks.map((task) => {
      const assignedRoles = roleAssignments.filter((ra) => ra.task_id === task.id).map((ra) => ra.role);
      const assignedUsers = userAssignments.filter((ua) => ua.task_id === task.id).map((ua) => ({
        id: ua.user_id,
        firstName: ua.user?.first_name || "",
        lastName: ua.user?.last_name || ""
      }));
      const taskSubtasks = subtasks.filter((s) => s.task_id === task.id).sort((a, b) => b.priority - a.priority);
      const subtaskViews = taskSubtasks.map((sub) => {
        const subDetails = details.filter((d) => d.subtask_id === sub.id);
        const hasDetails = subDetails.length > 0;
        const totalDetails2 = subDetails.length;
        const completedDetails2 = subDetails.filter((d) => d.completed).length;
        const progress2 = hasDetails ? Math.round(completedDetails2 / totalDetails2 * 100) : 0;
        const status2 = hasDetails ? this.computeSubtaskStatus(completedDetails2, totalDetails2) : sub.status;
        return __spreadProps(__spreadValues({}, sub), {
          details: subDetails,
          hasDetails,
          progress: progress2,
          status: status2,
          completedDetails: completedDetails2,
          totalDetails: totalDetails2
        });
      });
      const totalSubtasks = subtaskViews.length;
      const completedSubtasks = subtaskViews.filter((s) => s.status === "completata").length;
      const allDetails = subtaskViews.flatMap((s) => s.details);
      const totalDetails = allDetails.length;
      const completedDetails = allDetails.filter((d) => d.completed).length;
      const progress = this.computeTaskProgress(subtaskViews);
      const status = this.computeTaskStatus(subtaskViews);
      return __spreadProps(__spreadValues({}, task), {
        subtasks: subtaskViews,
        progress,
        status,
        completedSubtasks,
        totalSubtasks,
        completedDetails,
        totalDetails,
        assignedRoles,
        assignedUsers
      });
    });
  }
  // ─── Calcolo automatico status ─────────────────────────────────────────────
  computeSubtaskStatus(completed, total) {
    if (total === 0 || completed === 0)
      return "da_iniziare";
    if (completed === total)
      return "completata";
    return "in_lavorazione";
  }
  computeTaskStatus(subtasks) {
    if (subtasks.length === 0)
      return "da_iniziare";
    if (subtasks.every((s) => s.status === "completata"))
      return "completata";
    if (subtasks.some((s) => s.status !== "da_iniziare"))
      return "in_lavorazione";
    return "da_iniziare";
  }
  computeTaskProgress(subtasks) {
    if (subtasks.length === 0)
      return 0;
    const totalWeight = subtasks.reduce((acc, s) => {
      if (s.status === "completata")
        return acc + 1;
      if (s.status === "in_lavorazione")
        return acc + (s.hasDetails ? s.progress / 100 : 0.5);
      return acc;
    }, 0);
    return Math.round(totalWeight / subtasks.length * 100);
  }
  // ─── CRUD Sotto-task ────────────────────────────────────────────────────────
  createSubtask(payload) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_subtasks").insert(__spreadProps(__spreadValues({}, payload), {
        restaurant_id: restaurantId,
        status: "da_iniziare",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      })).select().single());
      if (error) {
        this.handleError("createSubtask", error);
        return null;
      }
      yield this.loadSubtasks();
      if (!data)
        return null;
      return data;
    });
  }
  updateSubtask(id, updates) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const { error } = yield this.run(this.getSupabaseClientPublic().from("task_subtasks").update(__spreadProps(__spreadValues({}, updates), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", id).eq("restaurant_id", restaurantId));
      if (error) {
        this.handleError("updateSubtask", error);
        return false;
      }
      yield this.loadSubtasks();
      return true;
    });
  }
  deleteSubtask(id) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const { error } = yield this.run(this.getSupabaseClientPublic().from("task_subtasks").delete().eq("id", id).eq("restaurant_id", restaurantId));
      if (error) {
        this.handleError("deleteSubtask", error);
        return false;
      }
      yield Promise.all([this.loadSubtasks(), this.loadDetails()]);
      return true;
    });
  }
  // ─── CRUD Dettagli ─────────────────────────────────────────────────────────
  createDetail(payload) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_details").insert(__spreadProps(__spreadValues({}, payload), {
        restaurant_id: restaurantId,
        completed: false,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      })).select().single());
      if (error) {
        this.handleError("createDetail", error);
        return null;
      }
      yield this.loadDetails();
      if (!data)
        return null;
      return data;
    });
  }
  updateDetail(id, updates) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const { error } = yield this.run(this.getSupabaseClientPublic().from("task_details").update(__spreadProps(__spreadValues({}, updates), { updated_at: (/* @__PURE__ */ new Date()).toISOString() })).eq("id", id).eq("restaurant_id", restaurantId));
      if (error) {
        this.handleError("updateDetail", error);
        return false;
      }
      yield this.loadDetails();
      return true;
    });
  }
  deleteDetail(id) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const { error } = yield this.run(this.getSupabaseClientPublic().from("task_details").delete().eq("id", id).eq("restaurant_id", restaurantId));
      if (error) {
        this.handleError("deleteDetail", error);
        return false;
      }
      yield this.loadDetails();
      return true;
    });
  }
  // ─── Helper copy ───────────────────────────────────────────────────────────
  buildTaskCopyText(task) {
    const lines = [`\u{1F4CB} TASK: ${task.title}`];
    if (task.notes)
      lines.push(`Note: ${task.notes}`);
    lines.push("");
    task.subtasks.forEach((sub) => {
      const check = sub.status === "completata" ? "\u2713" : "\u25CB";
      lines.push(`${check} ${sub.name}`);
      sub.details.forEach((d) => lines.push(`  ${d.completed ? "\u2713" : "\u2013"} ${d.name}`));
    });
    return lines.join("\n");
  }
  buildSubtaskCopyText(sub) {
    const lines = [`\u25CB ${sub.name}`];
    sub.details.forEach((d) => lines.push(`  ${d.completed ? "\u2713" : "\u2013"} ${d.name}`));
    return lines.join("\n");
  }
  getStaffUsers() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return [];
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("restaurant_staff").select(`
        user_id,
        role,
        user:user_id (
          id,
          first_name,
          last_name,
          email
        )
      `).eq("restaurant_id", restaurantId).eq("invitation_status", "accepted"));
      if (error || !data) {
        console.error("Error loading staff users:", error);
        return [];
      }
      return data.map((item) => {
        const userData = item.user;
        return {
          id: item.user_id,
          user_id: item.user_id,
          first_name: userData?.first_name || "",
          last_name: userData?.last_name || "",
          email: userData?.email || "",
          role: item.role
        };
      });
    });
  }
  createTaskWithAssignments(taskData, assignedRoles, assignedUserIds) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const task = yield this.create(__spreadProps(__spreadValues({}, taskData), {
        assigned_role: null
      }));
      if (!task)
        return null;
      if (assignedRoles.length > 0) {
        const roleInserts = assignedRoles.map((role) => ({
          task_id: task.id,
          role,
          restaurant_id: restaurantId
        }));
        const { error: roleError } = yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").insert(roleInserts));
        if (roleError) {
          yield this.delete(task.id);
          return null;
        }
      }
      if (assignedUserIds.length > 0) {
        const userInserts = assignedUserIds.map((userId) => ({
          task_id: task.id,
          user_id: userId,
          restaurant_id: restaurantId
        }));
        const { error: userError } = yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").insert(userInserts));
        if (userError) {
          yield this.delete(task.id);
          return null;
        }
      }
      yield Promise.all([
        this.loadData(),
        this.loadRoleAssignments(),
        this.loadUserAssignments()
      ]);
      const tasksView = yield firstValueFrom(this.tasksView$);
      return tasksView.find((t) => t.id === task.id) || null;
    });
  }
  updateTaskWithAssignments(id, taskData, assignedRoles, assignedUserIds) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return false;
      const updateSuccess = yield this.update(id, __spreadProps(__spreadValues({}, taskData), { assigned_role: null }));
      if (!updateSuccess)
        return false;
      const { error: deleteRolesError } = yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").delete().eq("task_id", id));
      if (deleteRolesError)
        return false;
      if (assignedRoles.length > 0) {
        const roleInserts = assignedRoles.map((role) => ({
          task_id: id,
          role,
          restaurant_id: restaurantId
        }));
        const { error: insertRolesError } = yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").insert(roleInserts));
        if (insertRolesError)
          return false;
      }
      const { error: deleteUsersError } = yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").delete().eq("task_id", id));
      if (deleteUsersError)
        return false;
      if (assignedUserIds.length > 0) {
        const userInserts = assignedUserIds.map((userId) => ({
          task_id: id,
          user_id: userId,
          restaurant_id: restaurantId
        }));
        const { error: insertUsersError } = yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").insert(userInserts));
        if (insertUsersError)
          return false;
      }
      yield Promise.all([
        this.loadData(),
        this.loadRoleAssignments(),
        this.loadUserAssignments()
      ]);
      return true;
    });
  }
  isTaskVisibleForUser(task, userId, userRole, isOwnerOrManager) {
    if (isOwnerOrManager)
      return true;
    if (task.assignedUsers.some((u) => u.id === userId))
      return true;
    if (userRole && task.assignedRoles.includes(userRole))
      return true;
    if (task.assigned_role && task.assigned_role !== "tutti") {
      return task.assigned_role === userRole;
    }
    if (task.assigned_role === "tutti")
      return true;
    if (task.assigned_role === null && task.assignedRoles.length === 0 && task.assignedUsers.length === 0) {
      return true;
    }
    return false;
  }
  getTemplates() {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return [];
      const allTasks = yield firstValueFrom(this.tasksView$);
      return allTasks.filter((task) => task.is_template);
    });
  }
  saveAsTemplate(taskId, templateName) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const originalTask = (yield firstValueFrom(this.tasksView$)).find((t) => t.id === taskId);
      if (!originalTask)
        return null;
      const newTaskData = {
        title: originalTask.title,
        notes: originalTask.notes,
        priority: originalTask.priority,
        association_type: originalTask.association_type,
        client_name: originalTask.client_name,
        due_date: originalTask.due_date,
        assigned_role: null,
        // i template usano le tabelle di assign
        is_template: true,
        template_name: templateName
      };
      const newTask = yield this.create(newTaskData);
      if (!newTask)
        return null;
      for (const sub of originalTask.subtasks) {
        const newSubtask = yield this.createSubtask({
          task_id: newTask.id,
          name: sub.name,
          priority: sub.priority,
          due_date: sub.due_date
        });
        if (!newSubtask) {
          yield this.delete(newTask.id);
          return null;
        }
        for (const detail of sub.details) {
          yield this.createDetail({
            subtask_id: newSubtask.id,
            name: detail.name,
            notes: detail.notes,
            due_date: detail.due_date
          });
        }
      }
      const roleAssignments = yield this.getRoleAssignmentsForTask(taskId);
      if (roleAssignments.length > 0) {
        const roleInserts = roleAssignments.map((ra) => ({
          task_id: newTask.id,
          role: ra.role,
          restaurant_id: restaurantId
        }));
        yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").insert(roleInserts));
      }
      const userAssignments = yield this.getUserAssignmentsForTask(taskId);
      if (userAssignments.length > 0) {
        const userInserts = userAssignments.map((ua) => ({
          task_id: newTask.id,
          user_id: ua.user_id,
          restaurant_id: restaurantId
        }));
        yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").insert(userInserts));
      }
      yield Promise.all([
        this.loadData(),
        this.loadSubtasks(),
        this.loadDetails(),
        this.loadRoleAssignments(),
        this.loadUserAssignments()
      ]);
      const updatedTasks = yield firstValueFrom(this.tasksView$);
      return updatedTasks.find((t) => t.id === newTask.id) || null;
    });
  }
  getRoleAssignmentsForTask(taskId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").select("*").eq("task_id", taskId));
      return error ? [] : data;
    });
  }
  getUserAssignmentsForTask(taskId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").select("*").eq("task_id", taskId));
      return error ? [] : data;
    });
  }
  createFromTemplate(templateId) {
    return __async(this, null, function* () {
      const restaurantId = yield this.getCurrentRestaurantId();
      if (!restaurantId)
        return null;
      const template = (yield firstValueFrom(this.tasksView$)).find((t) => t.id === templateId && t.is_template);
      if (!template)
        return null;
      const newTaskData = {
        title: template.title,
        notes: template.notes,
        priority: template.priority,
        association_type: template.association_type,
        client_name: template.client_name,
        due_date: template.due_date,
        assigned_role: null,
        is_template: false
      };
      const newTask = yield this.create(newTaskData);
      if (!newTask)
        return null;
      for (const sub of template.subtasks) {
        const newSubtask = yield this.createSubtask({
          task_id: newTask.id,
          name: sub.name,
          priority: sub.priority,
          due_date: sub.due_date
        });
        if (!newSubtask) {
          yield this.delete(newTask.id);
          return null;
        }
        for (const detail of sub.details) {
          yield this.createDetail({
            subtask_id: newSubtask.id,
            name: detail.name,
            notes: detail.notes,
            due_date: detail.due_date
          });
        }
      }
      const roleAssignments = yield this.getRoleAssignmentsForTask(templateId);
      if (roleAssignments.length > 0) {
        const roleInserts = roleAssignments.map((ra) => ({
          task_id: newTask.id,
          role: ra.role,
          restaurant_id: restaurantId
        }));
        yield this.run(this.getSupabaseClientPublic().from("task_role_assignments").insert(roleInserts));
      }
      const userAssignments = yield this.getUserAssignmentsForTask(templateId);
      if (userAssignments.length > 0) {
        const userInserts = userAssignments.map((ua) => ({
          task_id: newTask.id,
          user_id: ua.user_id,
          restaurant_id: restaurantId
        }));
        yield this.run(this.getSupabaseClientPublic().from("task_user_assignments").insert(userInserts));
      }
      yield Promise.all([
        this.loadData(),
        this.loadSubtasks(),
        this.loadDetails(),
        this.loadRoleAssignments(),
        this.loadUserAssignments()
      ]);
      const updatedTasks = yield firstValueFrom(this.tasksView$);
      return updatedTasks.find((t) => t.id === newTask.id) || null;
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TaskService_BaseFactory;
    return function TaskService_Factory(__ngFactoryType__) {
      return (\u0275TaskService_BaseFactory || (\u0275TaskService_BaseFactory = \u0275\u0275getInheritedFactory(_TaskService)))(__ngFactoryType__ || _TaskService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TaskService
};
//# sourceMappingURL=chunk-XK53QFW7.js.map
