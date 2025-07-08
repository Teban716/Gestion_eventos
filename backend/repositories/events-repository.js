import JsonRepository from './json-repository.js';

class EventsRepository extends JsonRepository {
    constructor() {
        super('events.json');
    }
}

export default  EventsRepository;