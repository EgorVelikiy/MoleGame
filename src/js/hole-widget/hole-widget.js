// (() => {
//     let activeHole = 1;
    
//     const holesArray = document.querySelectorAll('.hole')
//     console.log(holesArray)
//     const getHole = index => {
//         return holesArray[index]
//     }
    
//     const activateHole = (index) => {
//         getHole( index ).className = "hole hole_has-mole"
//     }

//     const deactivateHole = (index) => {
//         getHole( index ).className = 'hole'
//     }
//     activateHole(1)
//     const nextHole = () => setTimeout(() => {
//         newHole = Math.floor( Math.random() * 16);
//         if (newHole == activeHole) {
//             return
//         }
//         deactivateHole( activeHole );
//         activeHole = newHole;
//         activateHole( activeHole );
//         nextHole()

//     }, 1000)

//     nextHole();
//   })();


class holeWidget {
    constructor(element) {
        this._element = element;
        this.activeHole = Math.floor( Math.random() * 16)
    }
    
    getHole(index) {
        const holesArray = this._element.querySelectorAll('.hole')
        return holesArray[index]
    }

    addMole (index) {
        const mole = document.createElement('img')

        mole.src = 'https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png'
        mole.classList.add('mole')

        const hole = this.getHole(index)
        console.log(index)
        hole.appendChild(mole)
        console.log('from add')
        console.log(hole, index)
    }

    removeMole(index) {
        document.querySelector('.mole').remove()
    }

    nextHole() {
        console.log('from begin NextHole')
        setTimeout(() => {
            let newActiveHole = Math.floor( Math.random() * 16)
            if (newActiveHole == this.activeHole) {
                this.nextHole()
            }
            this.removeMole(this.activeHole)
            this.activeHole = newActiveHole
            this.addMole(this.activeHole)
            this.nextHole()
        }, 2000)
    }
    startGame() {
        this.addMole(this.activeHole)
        this.nextHole()
    }
}