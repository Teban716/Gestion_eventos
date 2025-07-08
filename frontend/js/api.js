class ApiService {
    constructor() {
        this.baseUrl = CONFIG.API_URL;
    }

    async request(url, options = {}) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw new Error(this.getErrorMessage(error));
        }
    }

    async get(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return this.request(url, { method: 'GET' });
    }

    async post(endpoint, data) {
        const url = `${this.baseUrl}${endpoint}`;
        return this.request(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async put(endpoint, data) {
        const url = `${this.baseUrl}${endpoint}`;
        return this.request(url, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    async delete(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return this.request(url, { method: 'DELETE' });
    }

    getErrorMessage(error) {
        if (error.message.includes('Failed to fetch')) {
            return 'Error de conexión. Verifica que el servidor esté funcionando.';
        }
        if (error.message.includes('404')) {
            return 'Recurso no encontrado.';
        }
        if (error.message.includes('500')) {
            return 'Error del servidor.';
        }
        return 'Error inesperado. Intenta nuevamente.';
    }
}

const api = new ApiService();