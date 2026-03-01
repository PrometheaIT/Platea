self.addEventListener('push', function(event) {
  if (!event.data) return;

  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = { title: 'Nuovo messaggio', body: event.data.text() };
  }

  const options = {
    body: data.body || 'Hai ricevuto un messaggio',
    icon: data.icon || '/icons/icon-192x192.png',
    badge: data.badge || '/icons/icon-72x72.png',
    tag: data.tag || 'default',
    renotify: data.renotify || false,
    data: data.data || {}
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Notifica', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const conversationId = event.notification.data?.conversation_id;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      const url = conversationId
        ? '/#/restaurant/chat-window?conversation=' + conversationId
        : '/';

      for (const client of clientList) {
        if (client.url.includes(location.origin) && 'focus' in client) {
          client.focus();
          client.navigate(url);
          return;
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});