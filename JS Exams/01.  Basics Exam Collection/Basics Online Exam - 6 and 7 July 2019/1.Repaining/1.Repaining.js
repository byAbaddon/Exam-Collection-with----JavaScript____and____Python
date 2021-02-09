function repainting(p) {
  let nailon = +p[0]
  let pain = +p[1]
  let razred = +p[2]
  let hours = +p[3]

  let klNailon = (nailon + 2) * 1.50 //18
  let klPain = ((pain * 110 / 100)) * 14.50 //175.45
  let klRazred = razred * 5.00
  let subtotal = klNailon + klPain + klRazred + 0.40 //213.85
  let total = ((subtotal * 0.30) * hours + subtotal).toFixed(2)

  console.log(`Total expenses: ${total} lv.`);
}
//repainting(['10','11','4','8',])