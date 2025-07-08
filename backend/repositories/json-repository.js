import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

class JsonRepository {
    constructor(filename, dataDir = 'data') {
        this.filename = filename;
        this.dataDir = dataDir;
        this.filePath = join(dataDir, filename);
    }

    readData() {
        try {
            const data = readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error leyendo ${this.filename}:`, error.message);
            return [];
        }
    }

    create(item) {
        const data = this.readData();

        const newItem = {
            id: this.generateId(),
            ...item
        };
    
        data.push(newItem);
        this.writeData(data);
        return newItem;
    }

    writeData(data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            writeFileSync(this.filePath, jsonData);
            return true;
        } catch (error) {
            console.error(`Error escribiendo ${this.filename}:`, error.message);
            return false;
        }
    }

    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}

export default JsonRepository;
