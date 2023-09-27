# choco-app

Библиотека для взаимодействия веб-приложений с Choco SuperApp. Работает только в браузерном окружении.

## Установка

```console
npm install choco-app
```

## Share

### `shareFile`

Type: `(base64: string, filename?: string, mime?: string) => void`<br>

Поделиться файлом формата Base64.

```typescript
import { shareFile } from 'choco-app';

shareFile('data:image/png;base64', 'name', 'image/png');
```

### `shareImage`

Type: `(base64: string, filename?: string, mime?: string) => void`<br>

Поделиться картинкой формата Base64.

```typescript
import { shareImage } from 'choco-app';

shareImage('data:image/png;base64', 'name', 'image/png');
```

### `shareText`

Type: `(text: string) => void`<br>

Поделиться текстом.

```typescript
import { shareText } from 'choco-app';

shareText('Hello World!');
```

## Остальное

### `clearCache`

Type: `() => void`<br>

Очищает кэш приложения.

```typescript
import { clearCache } from 'choco-app';

clearCache();
```

### `backToApplication`

Type: `() => void`<br>

Выход из веб-приложения обратно в нативное.

```typescript
import { backToApplication } from 'choco-app';

backToApplication();
```

### `applicationBecomeActive`

Type: `(callback: Function) => void`<br>

Принимает функцию, которую стоит выполнить при выходе приложения из фона.

```typescript
import { applicationBecomeActive } from 'choco-app';

applicationBecomeActive(() => console.log('Вышел из фона'));
```

### `hapticSelection`

Type: `() => void`<br>

Вызывает нативную вибрацию.

```typescript
import { hapticSelection } from 'choco-app';

hapticSelection();
```

### `isLocationEnabled`

Type: `() => boolean`<br>

Доступна ли геопозиция при использовании приложения.

```typescript
import { isLocationEnabled } from 'choco-app';

isLocationEnabled();
```

### `onKeyboardClosed`

Type: `(callback: Function) => void`<br>

Принимает функцию, которую стоит выполнить при закрытии клавиатуры.

```typescript
import { onKeyboardClosed } from 'choco-app';

onKeyboardClosed(() => console.log('Вышел из фона'));
```

### `reload`

Type: `() => void`<br>

Обновление страницы с передачей в query следующих параметров: track_id, code, device_id, session_id и т.д.

```typescript
import { reload } from 'choco-app';

reload();
```

### `getRefferalCode`

Type: `() => Promise<IRefferalCode>`<br>

Получение реферального кода.

```typescript
import { getRefferalCode } from 'choco-app';

getRefferalCode().then(code => console.log(`Реферальный код: ${code}`));
```

### `openQR`

Type: `() => Promise<string>`<br>

Нативное считывание QR-кода.

```typescript
import { openQR } from 'choco-app';

openQR().then(text => console.log(`QR-код: ${text}`));
```

### `pay`

Type: `(deeplink: string) => Promise<'success' | 'closed'>`<br>

Вызов оплаты через deeplink.

```typescript
import { pay } from 'choco-app';

pay().then(status => {
    if (status === 'success') {
        console.log('Оплата прошла успешно')
    } else {
        console.log('Модальное окно оплаты закрыли')
    }
}));
```

### `requestGeoPermissionStatus`

Type: `() => Promise<GeoStatus>`<br>

Получение статуса геопозиции.

```typescript
import { requestGeoPermissionStatus } from 'choco-app';

requestGeoPermissionStatus().then(status => {
    if (status === 'granted') {
        // Получить гео
    }
}));
```

### `authorize`

Type: `(clientId: string, type: 'code' | 'trackId') => Promise<string | undefined>`<br>

Авторизация пользователя по clientId.
Если пользователь не авторизован в нативном приложении, откроется окно авторизации с вводом номера телефона и кода.
В другом случае, метод сразу вернет ответ.

> :warning: **Вызов метода по type='code'**: вернет ошибку, если авторизация по code отсутствует в нативном приложении. Необходимо сделать обработку на ошибку.

```typescript
import { authorize } from 'choco-app';

// Авторизация по trackId
authorize('11111111', 'trackId').then(trackId => {
    if (trackId) {
        // Сделать запрос на авторизацию
    }
}));

// Авторизация по code
authorize('11111111', 'code')
    .then(code => {
        if (code) {
            // Сделать запрос на авторизацию
        }
    })
    .catch(error => {
        if (error.message === 'NOT_SUPPORTED') {
            // Показать ошибку или вызвать authorize с типом trackId
        }
    })
```

### `getNotificationStatus`

Type: `() => Promise<NotificationStatus>`<br>

Получение статуса о разрешенности уведомлений.

Статусы бывают granted | notDetermined | denied

```typescript
import { getNotificationStatus } from 'choco-app';

getNotificationStatus().then(status => {
    if (status === 'granted') {
        // Когда уведомлений разрешены
    }
}));
```

### `getNotificationStatus`

Type: `() => Promise<NotificationStatus>`<br>

Запрос на статусы о разрешенности уведомлений.
Когда у юзера не определен или заблочен, этот метод отправляет юзера в настройки приложения Choco в телефоне

Статусы бывают granted | notDetermined | denied

```typescript
import { requestNotificationStatus } from 'choco-app';

requestNotificationStatus().then(status => {
    if (status === 'granted') {
        // Когда уведомлений разрешены
    }
}));
```
