import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Reveal
    const revealElements = document.querySelectorAll(".revealRight, .revealLeft")
    console.log(revealElements)
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

  // const revealElements = document.querySelectorAll(".reveal")
  // const revealItems = []

  // for (const _element of revealElements) {
  //     const item = {}
  //     item.revealed = false
  //     item.element = _element

  //     const bounding = _element.getBoundingClientRect()
  //     item.top = bounding.top + scrollY
  //     item.height = bounding.height

  //     revealItems.push(item)
  // }

  // window.addEventListener('resize', () => {
  //     const scrollY = window.scrollY

  //     for (const _item of revealItems) {
  //         const bounding = _item.element.getBoundingClientRect()
  //         _item.top = bounding.top + scrollY
  //         _item.height = bounding.height
  //     }
  // })

  // window.addEventListener("scroll", () => {

  //     const limit = window.scrollY + window.innerHeight

  //     for (const _item of revealItems) {

  //         if (!_item.revealed && limit > _item.top + _item.height * 0.3) {
  //             _item.revealed = true
  //             _item.element.classList.add("revealed")
  //         }
  //     }

  // })

}
