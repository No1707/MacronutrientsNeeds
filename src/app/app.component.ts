import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // title = 'macrosNeeds';

  calories: number
  goal

  caloriesNeed(event){
    this.calories = event
  }

  ngOnInit(): void {

    // Reveal
    const revealElements = document.querySelectorAll(".revealRight, .revealLeft")
    const revealItems = []

    for (let i = 0; i < revealElements.length; i++) {
      const item = {
        revealed: false,
        element: revealElements[i],
        top: 0,
        height: 0
      }
      const bounding = item.element.getBoundingClientRect()
      item.top = bounding.top + scrollY
      item.height = bounding.height

      revealItems.push(item)
    }

    window.addEventListener('resize', () => {
      const scrollY = window.scrollY

      for (let i = 0; i < revealItems.length; i++) {
        const bounding = revealItems[i].element.getBoundingClientRect()
        revealItems[i].top = bounding.top + scrollY
        revealItems[i].height = bounding.height
      }
    })

    window.addEventListener("scroll", () => {

      const limit = window.scrollY + window.innerHeight

      for (let i = 0; i < revealItems.length; i++) {

        if (!revealItems[i].revealed && limit > revealItems[i].top + revealItems[i].height * 0.5) {
          revealItems[i].revealed = true
          revealItems[i].element.classList.add("revealed")
        }
      }

    })
  }
  // ngInit end

  

  loseOrGain(event){
    const active = document.querySelector(".activeButton")
    const tar = event.target
    if(active){
      active.classList.remove("activeButton")
    }
    if (tar.value === "lose"){
      this.goal = (this.calories * 0.8).toFixed(1)
      tar.classList.add("activeButton")
    } else {
      this.goal = (this.calories * 1.2).toFixed(1)
      tar.classList.add("activeButton")
    }
  }

}
