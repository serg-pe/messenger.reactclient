export function setAuthHeaders(token: string | null | undefined) {
    localStorage.setItem('token', token ? token: '');
}