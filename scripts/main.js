import { PaintOptionsMenu } from "./paintOptions.js";
import { InteriorOptionsMenu } from "./interiorOptions.js";
import { TechOptionsMenu } from "./technologyOptions.js";
import { WheelOptionsMenu } from "./wheelOptions.js";

const render = async () => {
  const showPaintTypeHTML = await PaintOptionsMenu();
  const showInteriorTypeHTML = await InteriorOptionsMenu();
  const showTechTypeHTML = await TechOptionsMenu();
  const showWheelTypeHTML = await WheelOptionsMenu();
  //   const buttonHTML = orderButtonBuilder(); ${buttonHTML}
  //   const showOrderHTML = await showOrders(); ${showOrderHTML}

  const composedHTML = `
 <h1>
      CARS-R-US &#128273 <br />
      Custom Auto Ordering
    </h1>

    <article class="choices">
<section class="choices_paint options">
        <h2>
            Paints
        </h2>
        ${showPaintTypeHTML}
    </section>

    <section class="choices_interior options">
        <h2>
            Interior 
        </h2>
        ${showInteriorTypeHTML}
    </section>

    <section class="choices_tech options">
        <h2>
            Tech Package
        </h2>
        ${showTechTypeHTML}
    </section>

    <section class="choices_wheel options">
        <h2>
            Wheels
        </h2>
        ${showWheelTypeHTML}
    </section>
</article>

<div class="order">
   
</div>

<h2>Custom Auto Orders</h2>
<article class="customOrders">

</article>

`;

  container.innerHTML = composedHTML;
};

render();
