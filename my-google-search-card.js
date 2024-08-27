class MyGoogleSearchCard extends HTMLElement {
    setConfig(config) {
        this.config = config;
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .search-card {
                    display: flex;
                    align-items: center;
                }
                .search-card input {
                    flex: 1;
                    padding: 5px;
                    font-size: 16px;
                }
                .search-card button {
                    padding: 5px 10px;
                    font-size: 16px;
                }
            </style>
            <div class="search-card">
                <input id="search-input" type="text" placeholder="Rechercher...">
                <button id="search-button">Rechercher</button>
            </div>
        `;

        this.querySelector('#search-button').addEventListener('click', () => this.performSearch());
        this.querySelector('#search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });
    }

    performSearch() {
        const input = this.querySelector('#search-input').value;
        if (input) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
        }
    }
}

customElements.define('my-google-search-card', MyGoogleSearchCard);
