---
theme: ./
layout: intro
---

# 主题

副标题

---
layout: catalog
---

- 第一章
- 第二章
- 第三章

---
layout: chapter
chapter: 1
title: 第一章
---

---
layout: default
sort: 1
title: 默认标题
---

- 第一点
- 第二点
- 第三点

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: thanks
---
