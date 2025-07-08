class UIManager {
  renderEvents(events) {
    const eventsList = document.getElementById("eventosList");
    eventsList.innerHTML = "";

    events.forEach((event) => {
      const eventCard = this.createEventCard(event);
      eventsList.appendChild(eventCard);
    });
  }

  createEventCard(event) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "18rem";

    const stateLabel = CONFIG.STATE_LABELS[event.state] || event.state;

    cardDiv.innerHTML = `
        <img src="./assets/flower.jpeg" class="card-img-top" alt="Imagen del evento">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title">${event.title}</h5>
                <span>${stateLabel}</span>
            </div>
            <p class="card-text">${event.description || "Sin descripción"}</p>
            <p class="card-text">
                <small class="text-muted">
                    <i class="fas fa-calendar me-1"></i>
                    ${event.date}
                </small>
            </p>
        </div>
    `;

    return cardDiv;
  }
}

const ui = new UIManager();