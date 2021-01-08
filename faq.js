// const coll = document.getElementsByClassName("collapsible");
// let i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

const iconNine = document.getElementById('icon-nine');
const accd = document.getElementById('collapseNine');

const iconSwitch = () => {
  accd.classList.add('collapse-icon.accordion-icon-rotate');
  console.log('worin');
};

iconNine.addEventListener('click', iconSwitch);

// $('#myCollapsible').on('hidden.bs.collapse', function () {
//   console.log('collaspe')
//  })
