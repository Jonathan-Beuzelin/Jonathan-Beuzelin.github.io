// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.clicked = false
    }
    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `      
            <img class="profile-picture" src="${avatar}">
            <div class="text-container">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
             </div>
            `
    }
}

export { Dog }