export function simplifyError(error: any) {
  if (error.response) {
    return error.response.data.message;
  } else {
    return error.message;
  }
}
