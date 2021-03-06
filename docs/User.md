# Пользователи

Запросы для авторизации пользователя. Выполняются в  формате /users/*

## POST data

Используется для регистрации нового пользователя. В случае успеха возвращается токен для работы с облачной платформой и его компонентами.

Требования к аргументам:
- Адрес электронной почты не может быть зарегестрирован повторно
- Имя и фамилия должна содержать кириллицу

| Метод и URI              | ```POST mpu-cloud.ru/users/data``` |
|--------------------------|------------------------------------|
| Требуется аутентификация | Нет                                |
| Формат данных            | JSON                               |

### Аргументы

| Параметр  | Описание | Тип данных | Ограничения    |
|-----------|----------|------------|----------------|
| firstName | Имя      | String     | до 50 символов |
| lastName  | Фамилия  | String     | до 50 символов |
| email     | Почта    | String     | до 50 символов |
| password  | Пароль   | String     | до 50 символов |

### Статусы

| Код                  | Описание                                              |
|----------------------|-------------------------------------------------------|
| ✅ 200 (OK)           | Пользователь зарегестрирован в системе, токен получен |
| ⛔️ 401 (Unauthorized) | Ошибка системы                                        |

### Данные

| Параметр  | Описание                    | Тип данных |
|-----------|-----------------------------|------------|
| token     | Токен для аутентификации    | String     |
| expiresAt | Дата истечения токена       | Date       |
| userId    | Индентификатор пользователя | Number     |


## GET token

Аутентификация пользователя в системе. Получение токена для работы с облачной платформой и его компонентами. Необходимо наличие учетной записи.

| Метод и URL              | ```POST mpu-cloud.ru/users/data``` |
|--------------------------|------------------------------------|
| Требуется аутентификация | Нет                                |
| Формат данных            | JSON                               |

### Аргументы

| Параметр | Описание | Тип данных | Ограничения    |
|----------|----------|------------|----------------|
| email    | Почта    | String     | до 50 символов |
| password | Пароль   | String     | до 50 символов |

### Статусы

| Код                           | Описание                                           |
|-------------------------------|----------------------------------------------------|
| ✅ 200 (OK)                    | Пользователь найден в системе, токен получен       |
| ⛔️ 500 (Internal Server Error) | Ошибка системы, или пользователь не найден         |
| ⛔️ 401 (Unauthorized)          | Пользователь найден в системе, пароль не совпадает |

### Данные

| Параметр  | Описание                    | Тип данных |
|-----------|-----------------------------|------------|
| token     | Токен для аутентификации    | String     |
| expiresAt | Дата истечения токена       | Date       |
| userId    | Индентификатор пользователя | Number     |

## GET data

Используется для получении данных пользователе

| Метод и URI              | ```GET mpu-cloud.ru/users/data``` |
|--------------------------|-----------------------------------|
| Требуется аутентификация | Нет                               |
| Формат данных            | JSON                              |

### Аргументы

| Параметр | Описание       | Тип данных | Ограничения |
|----------|----------------|------------|-------------|
| userId   | Индентификатор | Number     | Нет         |

### Статусы

| Код        | Описание                      |
|------------|-------------------------------|
| ✅ 200 (OK) | Пользователь найден в системе |

### Данные

| Параметр  | Описание | Тип данных |
|-----------|----------|------------|
| firstName | Имя      | String     |
| lastName  | Фамилия  | String     |
| email     | Почта    | String     |
