const cheerio = require('cheerio');

const html = `
  <div class="SpecTable">
  <div class="spec-head"><div>Product Information</div></div>
  <div class="spec-body">
    <div class="SKUName">SKU</div>
    <div class="SKUNumber">250027</div>
  </div>
  <div class="spec-body"><div>Mfr Part#</div><div>RX6700XTOCMECH2</div></div>
  <div class="spec-body">
    <div>UPC</div>
    <div>824142245163</div>
  </div>
  <div class="spec-head"><div>Chipset</div></div>
  <div class="spec-body">
    <div>Form Factor</div>
    <div>Full Height</div>
  </div>
  <div class="spec-body"><div>GPU Manufacturer</div>
  <div>AMD</div>
  </div><div class="spec-body"><div>Number of GPUs</div>
  <div>1</div>
  </div><div class="spec-body"><div>GPU Chipset</div>
  <div>Radeon RX 6700 XT</div>
  </div><div class="spec-body"><div>Overclocked</div>
  <div>Yes</div>
  </div><div class="spec-body"><div>Boost Core Clock Speed</div>
  <div>2620MHz</div>
  </div><div class="spec-body"><div>Stream Processors</div>
  <div>2560</div>
  </div><div class="spec-body"><div>PCIe Bandwidth</div>
  <div>PCIe 4.0 x16</div>
  </div><div class="spec-body"><div>Max Monitors Supported</div>
  <div>4</div>
  </div><div class="spec-head"><div>Memory</div></div>
  <div class="spec-body"><div>Video Memory</div>
  <div>12 GB</div>
  </div><div class="spec-body"><div>Memory Type</div>
  <div>GDDR6</div>
  </div><div class="spec-body"><div>Memory Bus</div>
  <div>192-bit</div>
  </div><div class="spec-head"><div>General Specifications</div></div>
  <div class="spec-body"><div>Led Color</div>
  <div>None</div>
  </div><div class="spec-body"><div>Color</div>
  <div>Black<br> Gray</div>
  </div><div class="spec-body"><div>VR Ready</div>
  <div>Yes</div>
  </div><div class="spec-body"><div>OpenGL Support</div>
  <div>OpenGL 4.6</div>
  </div><div class="spec-body"><div>DirectX Support</div>
  <div>DirectX 12</div>
  </div><div class="spec-body"><div>PCB Color</div>
  <div>Black</div>
  </div><div class="spec-body"><div>Multi-GPU Support</div>
  <div>AMD CrossFire</div>
  </div><div class="spec-body"><div>HDCP Support</div>
  <div>HDCP 2.3</div>
  </div><div class="spec-body"><div>3D Ready</div>
  <div>Yes</div>
  </div><div class="spec-body"><div>Cooling</div>
  <div>Fan</div>
  </div><div class="spec-head"><div>Ports &amp; Connectors</div></div>
  <div class="spec-body"><div>HDMI</div>
  <div>1 x HDMI 2.1</div>
  </div><div class="spec-body"><div>DisplayPort</div>
  <div>3 x DisplayPort 1.4a</div>
  </div><div class="spec-head"><div>System Requirements</div></div>
  <div class="spec-body"><div>Slot Width</div>
  <div>Dual Slot</div>
  </div><div class="spec-body"><div>Interface</div>
  <div>PCIe 4.0</div>
  </div><div class="spec-head"><div>Thermal &amp; Power</div></div>
  <div class="spec-body"><div>Power Connector</div>
  <div>2 x 8-pin</div>
  </div><div class="spec-body"><div>Recommended Power Supply</div>
  <div>650 Watts</div>
  </div><div class="spec-head"><div>Physical Specifications</div></div>
  <div class="spec-body"><div>Height</div>
  <div>5.16 in. (131.00 mm)</div>
  </div><div class="spec-body"><div>Video Card Length</div>
  <div>9.72 in. (247.00 mm)</div>
  </div><div class="spec-body"><div>Width</div>
  <div>Dual Slot</div>
  </div><div class="spec-head"><div>Warranty</div></div>
  <div class="spec-body"><div>Parts</div>
  <div>3 Years Limited</div>
  </div><div class="spec-body"><div>Labor</div>
  <div>3 Year Limited</div>
  </div></div>
  `;

const $ = cheerio.load(html);
const specs = {};
$('.spec-body').each((i, element) => {
  const specName = $('div:first-child', element).text();
  const specValue = $('div:last-child', element).text();
  specs[specName] = specValue;
});
console.log(specs);
