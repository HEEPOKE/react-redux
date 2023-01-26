export default function getToken() {
  const Authorization = sessionStorage.getItem("Authorization") ?? false;

  if (!Authorization) {
    return { Authorization: "" };
  } else {
    return { Authorization: `${Authorization}` };
  }
}
