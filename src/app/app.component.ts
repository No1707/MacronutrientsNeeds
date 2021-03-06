import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'macrosNeeds';

  calories: number
  goal

  carbsRatio: number
  protsRatio: number
  fatsRatio: number

  caloriesNeed(event){
    this.calories = event
    this.goal = event.toFixed(1)
  }

  ngOnInit(): void {

    // Reveal
    const revealElements = document.querySelectorAll(".revealRight, .revealLeft, .reveal")
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

  
  // tdee + goal
  loseOrGain(event){
    const active = document.querySelector(".activeButton")
    const tar = event.target
    if(active){
      active.classList.remove("activeButton")
    }
    if(tar.value === "lose"){
      this.goal = (this.calories * 0.8).toFixed(1)
      tar.classList.add("activeButton")
      this.carbsRatio = 35
      this.protsRatio = 45
      this.fatsRatio = 20
    } else if(tar.value === "gain"){
      this.goal = (this.calories * 1.2).toFixed(1)
      tar.classList.add("activeButton")
      this.carbsRatio = 45
      this.protsRatio = 35
      this.fatsRatio = 20
    } else {
      this.goal = this.calories.toFixed(1)
      tar.classList.add("activeButton")
      this.carbsRatio = 50
      this.protsRatio = 20
      this.fatsRatio = 30
    }
    
  }

  test(){
    const init = this.carbsRatio

    this.carbsRatio = this.protsRatio
    this.protsRatio = init
  }

}
