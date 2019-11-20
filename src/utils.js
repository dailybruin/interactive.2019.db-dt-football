export function setCookie(key, value) {
  const date = new Date();
  date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value};expires=${date.toUTCString};path=/`;
}
