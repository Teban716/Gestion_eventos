// Event management functionality

class EventManager {
    constructor() {
        this.events = [];
        this.filteredEvents = [];
        this.currentModal = null;
    }


    async loadEvents() {
        try {
            const response = await api.get('/events');
            
            this.events = Array.isArray(response) ? response : response.data || [];
            this.filteredEvents = [...this.events];
            
            this.renderEvents();
        } catch (error) {
            console.error('Error loading events:', error);
        }
    }

    renderEvents() {
        ui.renderEvents(this.filteredEvents);
    }
}

const eventManager = new EventManager();