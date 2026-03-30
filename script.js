const CATALOG = {
  phone: {
    title: 'Telefono',
    subtitle: 'Configuratore smartphone completo per tutte le fasce',
    brands: ['Samsung', 'Xiaomi', 'realme', 'OnePlus', 'Nothing', 'Honor', 'Motorola', 'vivo', 'OPPO', 'POCO'],
    os: ['Android 12', 'Android 13', 'Android 14', 'Android 15', 'Android 16 beta'],
    connectivity: ['4G · Wi‑Fi 5 · Bluetooth 5.0', '5G · Wi‑Fi 6 · Bluetooth 5.2', '5G+ · Wi‑Fi 7 · Bluetooth 5.4'],
    sensors: ['Accelerometro', 'Giroscopio', 'Barometro', 'Prossimità', 'Bussola', 'NFC', 'UWB', 'Impronte ottico', 'Impronte ultrasonico', 'Sensore Hall'],
    cameras: true,
    cameraRange: [1, 7],
    powerLabel: 'Batteria (mAh)',
    powerValue: 5500,
    chargeLabel: 'Ricarica cablata (W)',
    chargeValue: 80,
    chargeOptions: ['No', '10W', '15W', '30W', '50W'],
    displayLabel: 'Display (pollici)',
    displayValue: 6.8,
    displayTypeOptions: ['IPS LCD', 'OLED', 'AMOLED', 'LTPO AMOLED'],
    refreshOptions: ['60 Hz', '90 Hz', '120 Hz', '144 Hz'],
    simOptions: ['Dual SIM', 'Dual SIM + eSIM', 'Single SIM + eSIM'],
    audioOptions: ['Stereo Base', 'Stereo Hi-Res', 'Dolby Atmos'],
    protectionOptions: ['IP52', 'IP54', 'IP67', 'IP68'],
    showDynamicRam: true,
    showCamera: true,
    showSim: true,
    showWireless: true,
    cpus: [
      { brand: 'Unisoc T606', tier: 'entry' }, { brand: 'MediaTek Helio G36', tier: 'entry' }, { brand: 'Helio G85', tier: 'entry' }, { brand: 'Snapdragon 4 Gen 1', tier: 'entry' },
      { brand: 'Snapdragon 4 Gen 2', tier: 'entry' }, { brand: 'Dimensity 6100+', tier: 'entry' }, { brand: 'Exynos 850', tier: 'entry' }, { brand: 'Snapdragon 680', tier: 'entry' },
      { brand: 'Snapdragon 695', tier: 'mid' }, { brand: 'Dimensity 7020', tier: 'mid' }, { brand: 'Dimensity 7300', tier: 'mid' }, { brand: 'Exynos 1380', tier: 'mid' },
      { brand: 'Snapdragon 6 Gen 1', tier: 'mid' }, { brand: 'Snapdragon 7s Gen 2', tier: 'mid' }, { brand: 'Tensor G2', tier: 'mid' }, { brand: 'Dimensity 8200', tier: 'high' },
      { brand: 'Snapdragon 7+ Gen 3', tier: 'high' }, { brand: 'Exynos 2400e', tier: 'high' }, { brand: 'Tensor G4', tier: 'high' }, { brand: 'Snapdragon 8s Gen 3', tier: 'high' },
      { brand: 'Snapdragon 8 Gen 3', tier: 'flagship' }, { brand: 'Snapdragon 8 Elite', tier: 'flagship' }, { brand: 'Dimensity 9300+', tier: 'flagship' },
      { brand: 'Dimensity 9400', tier: 'flagship' }, { brand: 'Exynos 2500', tier: 'flagship' }, { brand: 'Tensor G5', tier: 'flagship' }
    ],
    gpus: [
      { brand: 'PowerVR GE8320', tier: 'entry' }, { brand: 'Adreno 610', tier: 'entry' }, { brand: 'Mali-G52 MC2', tier: 'entry' }, { brand: 'Mali-G57 MC2', tier: 'entry' },
      { brand: 'Adreno 619', tier: 'mid' }, { brand: 'Mali-G68 MC4', tier: 'mid' }, { brand: 'Xclipse 530', tier: 'mid' }, { brand: 'Immortalis-G615 MC2', tier: 'mid' },
      { brand: 'Adreno 720', tier: 'high' }, { brand: 'Mali-G715 MC7', tier: 'high' }, { brand: 'Xclipse 920', tier: 'high' }, { brand: 'Immortalis-G720 MC8', tier: 'high' },
      { brand: 'Adreno 750', tier: 'flagship' }, { brand: 'Adreno 830', tier: 'flagship' }, { brand: 'Immortalis-G925', tier: 'flagship' }, { brand: 'Xclipse 950', tier: 'flagship' }
    ],
    ramOptions: ['2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB', '24 GB'],
    dynamicRamOptions: ['2 GB', '4 GB', '6 GB', '8 GB', '10 GB', '12 GB', '14 GB', '16 GB'],
    storageOptions: ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB'],
    storageTypes: ['eMMC 5.1', 'UFS 2.2', 'UFS 3.1', 'UFS 4.0']
  },
  pc: {
    title: 'PC',
    subtitle: 'Solo componenti PC: desktop, mini-PC e laptop con parti reali',
    brands: ['ASUS', 'Acer', 'Lenovo', 'MSI', 'Dell', 'HP', 'Gigabyte', 'Razer', 'Framework', 'Corsair'],
    os: ['Windows 11 Home', 'Windows 11 Pro', 'Ubuntu 24.04', 'Fedora 42', 'FreeDOS'],
    connectivity: ['Wi‑Fi 6 · BT 5.2 · Ethernet 1G', 'Wi‑Fi 6E · BT 5.3 · Ethernet 2.5G', 'Wi‑Fi 7 · BT 5.4 · Ethernet 5G'],
    sensors: ['TPM 2.0', 'IR Face Unlock', 'Fingerprint reader', 'Ambient light', 'Lid sensor', 'Thermal sensors', 'Fan tachometer', 'Power monitor'],
    cameras: true,
    cameraRange: [1, 1],
    powerLabel: 'PSU / Batteria (Wh/W)',
    powerValue: 650,
    chargeLabel: 'TDP CPU target (W)',
    chargeValue: 125,
    chargeOptions: ['No', '65W USB-C', '100W USB-C', '140W USB-C'],
    displayLabel: 'Monitor (pollici)',
    displayValue: 27,
    displayTypeOptions: ['IPS', 'VA', 'OLED', 'Mini-LED'],
    refreshOptions: ['60 Hz', '120 Hz', '144 Hz', '165 Hz', '240 Hz'],
    simOptions: ['N/A'],
    audioOptions: ['Stereo notebook', '2.1', '5.1', '7.1'],
    protectionOptions: ['Kensington lock', 'TPM shield', 'MIL-STD chassis'],
    showDynamicRam: false,
    showCamera: true,
    showSim: false,
    showWireless: false,
    cpus: [
      { brand: 'Intel Processor N100', tier: 'entry' }, { brand: 'Intel Core i3-1215U', tier: 'entry' }, { brand: 'Intel Core i3-1315U', tier: 'entry' }, { brand: 'Intel Core i5-12400', tier: 'entry' },
      { brand: 'AMD Athlon Gold 7220U', tier: 'entry' }, { brand: 'AMD Ryzen 3 5300U', tier: 'entry' }, { brand: 'AMD Ryzen 3 7320U', tier: 'entry' }, { brand: 'AMD Ryzen 5 5500GT', tier: 'entry' },
      { brand: 'Intel Core i5-13420H', tier: 'mid' }, { brand: 'Intel Core i5-14400', tier: 'mid' }, { brand: 'Intel Core i5-14600K', tier: 'mid' }, { brand: 'Intel Core Ultra 5 125H', tier: 'mid' },
      { brand: 'AMD Ryzen 5 7600', tier: 'mid' }, { brand: 'AMD Ryzen 5 7640HS', tier: 'mid' }, { brand: 'AMD Ryzen 7 7700', tier: 'mid' }, { brand: 'AMD Ryzen AI 7 350', tier: 'mid' },
      { brand: 'Intel Core i7-14700HX', tier: 'high' }, { brand: 'Intel Core i7-14700K', tier: 'high' }, { brand: 'Intel Core Ultra 7 155H', tier: 'high' }, { brand: 'Intel Core Ultra 7 265K', tier: 'high' },
      { brand: 'AMD Ryzen 7 8845HS', tier: 'high' }, { brand: 'AMD Ryzen 7 9700X', tier: 'high' }, { brand: 'AMD Ryzen 9 7900', tier: 'high' }, { brand: 'AMD Ryzen AI 9 HX 370', tier: 'high' },
      { brand: 'Intel Core i9-14900KS', tier: 'flagship' }, { brand: 'Intel Core Ultra 9 285K', tier: 'flagship' }, { brand: 'Intel Xeon W7-2595X', tier: 'flagship' },
      { brand: 'AMD Ryzen 9 9950X', tier: 'flagship' }, { brand: 'AMD Threadripper 7970X', tier: 'flagship' }, { brand: 'AMD Threadripper PRO 7995WX', tier: 'flagship' }
    ],
    gpus: [
      { brand: 'Intel UHD 730', tier: 'entry' }, { brand: 'Intel Iris Xe 80EU', tier: 'entry' }, { brand: 'Radeon 610M', tier: 'entry' }, { brand: 'NVIDIA GTX 1650', tier: 'entry' },
      { brand: 'NVIDIA RTX 3050', tier: 'mid' }, { brand: 'NVIDIA RTX 4050', tier: 'mid' }, { brand: 'NVIDIA RTX 4060', tier: 'mid' }, { brand: 'Intel Arc A580', tier: 'mid' },
      { brand: 'Radeon RX 7600', tier: 'mid' }, { brand: 'Radeon RX 7700 XT', tier: 'high' }, { brand: 'NVIDIA RTX 4070 SUPER', tier: 'high' }, { brand: 'NVIDIA RTX 4080', tier: 'high' },
      { brand: 'Radeon RX 7900 XTX', tier: 'high' }, { brand: 'NVIDIA RTX 4090', tier: 'flagship' }, { brand: 'NVIDIA RTX 5090', tier: 'flagship' },
      { brand: 'Radeon RX 8900 XTX', tier: 'flagship' }, { brand: 'NVIDIA RTX 6000 Ada', tier: 'flagship' }, { brand: 'Radeon Pro W7900', tier: 'flagship' }
    ],
    ramOptions: ['4 GB', '8 GB', '16 GB', '24 GB', '32 GB', '48 GB', '64 GB', '96 GB', '128 GB'],
    dynamicRamOptions: ['N/A'],
    storageOptions: ['128 GB', '256 GB', '512 GB', '1 TB', '2 TB', '4 TB', '8 TB'],
    storageTypes: ['SATA SSD', 'NVMe Gen3', 'NVMe Gen4', 'NVMe Gen5']
  },
  tv: {
    title: 'TV',
    subtitle: 'Solo componenti TV reali: pannello, SoC TV, audio e standard video',
    brands: ['Samsung', 'LG', 'Sony', 'TCL', 'Hisense', 'Philips', 'Panasonic', 'Sharp'],
    os: ['Google TV', 'Tizen', 'webOS', 'VIDAA', 'Fire TV OS'],
    connectivity: ['Wi‑Fi 5 · BT 5.0 · HDMI 2.0', 'Wi‑Fi 6 · BT 5.2 · HDMI 2.1', 'Wi‑Fi 6E · BT 5.3 · HDMI 2.1 eARC'],
    sensors: ['Sensore luminosità', 'ALLM', 'VRR', 'eARC', 'CEC HDMI', 'Dolby Vision IQ', 'Game Mode Auto', 'Eco sensor'],
    cameras: false,
    cameraRange: [0, 0],
    powerLabel: 'Consumo energetico (W)',
    powerValue: 180,
    chargeLabel: 'Classe energetica',
    chargeValue: 1,
    chargeOptions: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    displayLabel: 'Dimensione pannello (pollici)',
    displayValue: 55,
    displayTypeOptions: ['LED', 'QLED', 'Mini-LED', 'OLED', 'QD-OLED'],
    refreshOptions: ['50 Hz', '60 Hz', '100 Hz', '120 Hz', '144 Hz'],
    simOptions: ['N/A'],
    audioOptions: ['2.0 20W', '2.1 40W', '4.2 60W', 'Dolby Atmos 80W'],
    protectionOptions: ['VESA 200x200', 'VESA 300x300', 'VESA 400x400'],
    showDynamicRam: false,
    showCamera: false,
    showSim: false,
    showWireless: false,
    cpus: [
      { brand: 'MediaTek MT9216', tier: 'entry' }, { brand: 'MediaTek Pentonic 700', tier: 'entry' }, { brand: 'Amlogic T962', tier: 'entry' }, { brand: 'Realtek RTD2851', tier: 'entry' },
      { brand: 'Novatek NT72671', tier: 'entry' }, { brand: 'HiSilicon Hi3751', tier: 'entry' }, { brand: 'MediaTek MT9638', tier: 'mid' }, { brand: 'MediaTek Pentonic 1000', tier: 'mid' },
      { brand: 'Realtek RTD2885', tier: 'mid' }, { brand: 'Amlogic T972', tier: 'mid' }, { brand: 'Samsung Crystal Processor 4K', tier: 'mid' }, { brand: 'LG α5 AI Processor 4K', tier: 'mid' },
      { brand: 'Samsung NQ4 AI Gen2', tier: 'high' }, { brand: 'LG α7 AI Processor Gen7', tier: 'high' }, { brand: 'Sony 4K HDR Processor X1', tier: 'high' },
      { brand: 'MediaTek Pentonic 2000', tier: 'high' }, { brand: 'Hisense Hi-View Engine X', tier: 'high' }, { brand: 'Philips P5 Engine Gen8', tier: 'high' },
      { brand: 'Sony Cognitive Processor XR', tier: 'flagship' }, { brand: 'LG α11 AI Processor 4K', tier: 'flagship' }, { brand: 'Samsung NQ8 AI Gen3', tier: 'flagship' },
      { brand: 'Panasonic HCX Pro AI MK II', tier: 'flagship' }, { brand: 'TCL AiPQ Processor 3.0', tier: 'flagship' }, { brand: 'MediaTek Pentonic 8000', tier: 'flagship' }
    ],
    gpus: [
      { brand: 'Mali-G31 MP2 TV', tier: 'entry' }, { brand: 'Mali-G52 MP2 TV', tier: 'entry' }, { brand: 'IMG BXE-2-32', tier: 'entry' }, { brand: 'Adreno TV Lite', tier: 'entry' },
      { brand: 'Mali-G57 MC3 TV', tier: 'mid' }, { brand: 'IMG BXM-4-64', tier: 'mid' }, { brand: 'Mali-G68 MC4 TV', tier: 'mid' }, { brand: 'Xclipse TV 540', tier: 'mid' },
      { brand: 'Mali-G610 MC6 TV', tier: 'high' }, { brand: 'IMG CXT-48-1536', tier: 'high' }, { brand: 'Xclipse TV 820', tier: 'high' }, { brand: 'Immortalis-G615 TV', tier: 'high' },
      { brand: 'Mali-G720 TV', tier: 'flagship' }, { brand: 'Immortalis-G720 TV', tier: 'flagship' }, { brand: 'Xclipse TV 950', tier: 'flagship' }, { brand: 'IMG DXT-72-2304', tier: 'flagship' }
    ],
    ramOptions: ['1 GB', '2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB', '16 GB'],
    dynamicRamOptions: ['N/A'],
    storageOptions: ['8 GB', '16 GB', '32 GB', '64 GB', '128 GB', '256 GB'],
    storageTypes: ['eMMC', 'UFS', 'Embedded NVMe']
  }
};

const STORAGE_KEY = 'smash_store_multi_builder_v2';
const state = { productType: 'phone', cameraCount: 4, selectedSensors: new Set() };

const el = Object.fromEntries([
  'builderTitle','builderSubtitle','tierSelect','deviceBrand','deviceModel','cpuSelect','gpuSelect','cpuSpecs','gpuSpecs','brandStrip','ramSelect','dynamicRamToggle','dynamicRamSelect','storageSelect','storageType','cameraSec','cameraTitle','cameraCountLabelText','cameraCount','cameraCountLabel','cameraList','sensorList','batteryInput','chargeInput','wirelessCharge','displaySize','refreshRate','displayType','osSelect','connectivitySelect','coolingSelect','materialSelect','finishSelect','colorSelect','simSelect','audioSelect','protectionSelect','priceInput','autoPrice','priceError','saveConfigBtn','loadConfigBtn','buildBtn','liveSpecs','outputPanel','productCard','themeToggle'
].map((id)=>[id,document.getElementById(id)]));

const sideBtns = [...document.querySelectorAll('.side-btn')];
const cameraTemplate = document.getElementById('cameraTemplate');

const fillSimpleSelect = (select, list) => {
  select.innerHTML = list.map((value) => `<option>${value}</option>`).join('');
};

const activeConfig = () => CATALOG[state.productType];
const activeCpus = () => activeConfig().cpus.filter((item) => item.tier === el.tierSelect.value);
const activeGpus = () => activeConfig().gpus.filter((item) => item.tier === el.tierSelect.value);
const currentCPU = () => activeCpus()[Number(el.cpuSelect.value)] || activeCpus()[0];
const currentGPU = () => activeGpus()[Number(el.gpuSelect.value)] || activeGpus()[0];

function setFieldVisible(id, visible) {
  const input = document.getElementById(id);
  const label = document.querySelector(`label[for="${id}"]`);
  const display = visible ? '' : 'none';
  if (input) input.style.display = display;
  if (label) label.style.display = display;
}

function applyTypeUI(cfg) {
  setFieldVisible('dynamicRamToggle', cfg.showDynamicRam);
  setFieldVisible('dynamicRamSelect', cfg.showDynamicRam);
  setFieldVisible('simSelect', cfg.showSim);
  setFieldVisible('wirelessCharge', cfg.showWireless);

  const powerLabel = document.querySelector('label[for="batteryInput"]');
  const chargeLabel = document.querySelector('label[for="chargeInput"]');
  const displayLabel = document.querySelector('label[for="displaySize"]');
  if (powerLabel) powerLabel.textContent = cfg.powerLabel;
  if (chargeLabel) chargeLabel.textContent = cfg.chargeLabel;
  if (displayLabel) displayLabel.textContent = cfg.displayLabel;

  el.batteryInput.value = cfg.powerValue;
  el.chargeInput.value = cfg.chargeValue;
  el.displaySize.value = cfg.displayValue;
}

function applyTypeConfig() {
  const cfg = activeConfig();
  el.builderTitle.textContent = `Configura il tuo ${cfg.title}`;
  el.builderSubtitle.textContent = cfg.subtitle;

  fillSimpleSelect(el.deviceBrand, cfg.brands);
  fillSimpleSelect(el.osSelect, cfg.os);
  fillSimpleSelect(el.connectivitySelect, cfg.connectivity);
  fillSimpleSelect(el.ramSelect, cfg.ramOptions);
  fillSimpleSelect(el.dynamicRamSelect, cfg.dynamicRamOptions);
  fillSimpleSelect(el.storageSelect, cfg.storageOptions);
  fillSimpleSelect(el.storageType, cfg.storageTypes);
  fillSimpleSelect(el.displayType, cfg.displayTypeOptions);
  fillSimpleSelect(el.refreshRate, cfg.refreshOptions);
  fillSimpleSelect(el.wirelessCharge, cfg.chargeOptions);
  fillSimpleSelect(el.simSelect, cfg.simOptions);
  fillSimpleSelect(el.audioSelect, cfg.audioOptions);
  fillSimpleSelect(el.protectionSelect, cfg.protectionOptions);

  el.ramSelect.value = cfg.ramOptions[Math.min(2, cfg.ramOptions.length - 1)];
  el.storageSelect.value = cfg.storageOptions[Math.min(2, cfg.storageOptions.length - 1)];
  el.dynamicRamToggle.checked = false;
  el.dynamicRamSelect.disabled = !cfg.showDynamicRam;

  applyTypeUI(cfg);
  state.selectedSensors = new Set(cfg.sensors.slice(0, Math.min(4, cfg.sensors.length)));

  el.cameraSec.hidden = !cfg.showCamera;
  if (cfg.showCamera) {
    el.cameraTitle.textContent = state.productType === 'pc' ? '🎥 Webcam PC' : '📸 Fotocamere';
    el.cameraCountLabelText.textContent = state.productType === 'pc' ? 'Webcam integrata' : 'Numero fotocamere (1–7)';
    el.cameraCount.min = cfg.cameraRange[0];
    el.cameraCount.max = cfg.cameraRange[1];
    state.cameraCount = cfg.cameraRange[1];
    el.cameraCount.value = String(state.cameraCount);
    el.cameraCountLabel.textContent = state.productType === 'pc' ? '1 webcam' : `${state.cameraCount} fotocamere`;
    renderCameraInputs();
  } else {
    state.cameraCount = 0;
    el.cameraList.innerHTML = '';
  }

  renderSensors(cfg.sensors);
  refreshTierOptions();
}

function refreshTierOptions() {
  el.cpuSelect.innerHTML = activeCpus().map((item, index) => `<option value="${index}">${item.brand}</option>`).join('');
  el.gpuSelect.innerHTML = activeGpus().map((item, index) => `<option value="${index}">${item.brand}</option>`).join('');
  updateLiveSpecs();
}

function renderSensors(list) {
  el.sensorList.innerHTML = '';
  list.forEach((sensor) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `chip ${state.selectedSensors.has(sensor) ? 'active' : ''}`;
    chip.textContent = sensor;
    chip.addEventListener('click', () => {
      if (state.selectedSensors.has(sensor)) {
        state.selectedSensors.delete(sensor);
      } else {
        state.selectedSensors.add(sensor);
      }
      chip.classList.toggle('active');
      updateLiveSpecs();
    });
    el.sensorList.appendChild(chip);
  });
}

function renderCameraInputs() {
  el.cameraList.innerHTML = '';
  for (let i = 0; i < state.cameraCount; i += 1) {
    const node = cameraTemplate.content.cloneNode(true);
    const item = node.querySelector('.camera-item');
    item.querySelector('.camera-title').textContent = state.productType === 'pc' ? 'Webcam integrata' : `Fotocamera #${i + 1}`;
    item.querySelectorAll('.camera-adv').forEach((advanced) => {
      const hideAdvanced = state.productType === 'phone' && i === 0;
      advanced.classList.toggle('hidden', hideAdvanced);
    });
    if (state.productType === 'pc') {
      item.querySelector('.camera-type').value = 'Webcam';
      item.querySelector('.camera-type').disabled = true;
    }
    el.cameraList.appendChild(node);
  }
}

function cameraSummary() {
  if (state.productType === 'tv') return 'Nessuna camera';
  const cameras = [...el.cameraList.querySelectorAll('.camera-item')];
  return cameras.map((item, index) => {
    const base = `${index + 1}) ${item.querySelector('.camera-type').value} ${item.querySelector('.camera-mp').value}MP`;
    if (state.productType === 'pc') return `${base} · ${item.querySelector('.camera-video').value}`;
    if (index === 0) return base;
    return `${base} · ${item.querySelector('.camera-aperture').value} · sensore ${item.querySelector('.camera-sensor-size').value} · OIS:${item.querySelector('.camera-ois').value} · PDAF:${item.querySelector('.camera-pdaf').value}`;
  }).join(' || ');
}

function estimatePrice() {
  const tierBase = { entry: 150, mid: 450, high: 900, flagship: 1400 }[el.tierSelect.value];
  const typeBoost = { phone: 0, pc: 250, tv: 220 }[state.productType];
  const ramBoost = activeConfig().ramOptions.indexOf(el.ramSelect.value) * 70;
  const storageBoost = activeConfig().storageOptions.indexOf(el.storageSelect.value) * 60;
  return Math.min(2999, tierBase + typeBoost + ramBoost + storageBoost + state.selectedSensors.size * 10);
}

function validatePrice() {
  const value = Number(el.priceInput.value);
  const valid = Number.isFinite(value) && value >= 1 && value <= 2999;
  el.priceError.textContent = valid ? '' : 'Inserisci un prezzo valido tra 1€ e 2.999€.';
  return valid;
}

function collectData() {
  const cfg = activeConfig();
  return {
    categoria: state.productType.toUpperCase(),
    prodotto: `${el.deviceBrand.value} ${el.deviceModel.value || 'Custom'}`,
    fascia: el.tierSelect.options[el.tierSelect.selectedIndex].text,
    cpu: currentCPU()?.brand || 'N/D',
    gpu: currentGPU()?.brand || 'N/D',
    ram: cfg.showDynamicRam && el.dynamicRamToggle.checked ? `${el.ramSelect.value} + ${el.dynamicRamSelect.value} dinamica` : el.ramSelect.value,
    storage: `${el.storageSelect.value} · ${el.storageType.value}`,
    cameras: cameraSummary(),
    sensors: [...state.selectedSensors].join(', ') || 'Nessuno',
    power: `${el.batteryInput.value} · ${el.chargeInput.value} · ${cfg.showWireless ? el.wirelessCharge.value : 'N/A'}`,
    display: `${el.displaySize.value}" ${el.displayType.value} @ ${el.refreshRate.value}`,
    os: el.osSelect.value,
    connectivity: el.connectivitySelect.value,
    design: `${el.materialSelect.value} · ${el.finishSelect.value} · ${el.colorSelect.value}`,
    prezzo: `${Number(el.priceInput.value || 0).toLocaleString('it-IT')} €`
  };
}

function updateLiveSpecs() {
  const data = collectData();
  el.cpuSpecs.textContent = `Tier ${el.tierSelect.value} · ${state.productType.toUpperCase()}`;
  el.gpuSpecs.textContent = `Tier ${el.tierSelect.value} · ${state.productType.toUpperCase()}`;
  el.brandStrip.innerHTML = [
    `Tipo: ${state.productType.toUpperCase()}`,
    `Brand: ${el.deviceBrand.value}`,
    `CPU: ${currentCPU()?.brand || 'N/D'}`,
    `GPU: ${currentGPU()?.brand || 'N/D'}`
  ].map((item) => `<span class='logo-pill'>${item}</span>`).join('');
  el.autoPrice.value = `${estimatePrice().toLocaleString('it-IT')} €`;
  el.liveSpecs.innerHTML = Object.entries(data)
    .map(([key, value]) => `<div class='spec-item'><span>${key.toUpperCase()}</span><strong>${value}</strong></div>`)
    .join('');
}

function saveConfig() {
  const payload = {
    type: state.productType,
    tier: el.tierSelect.value,
    brand: el.deviceBrand.value,
    model: el.deviceModel.value,
    cpuIndex: el.cpuSelect.value,
    gpuIndex: el.gpuSelect.value,
    ram: el.ramSelect.value,
    dynamicRamEnabled: el.dynamicRamToggle.checked,
    dynamicRam: el.dynamicRamSelect.value,
    storage: el.storageSelect.value,
    storageType: el.storageType.value,
    cameraCount: state.cameraCount,
    sensors: [...state.selectedSensors],
    price: el.priceInput.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadConfig() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  const saved = JSON.parse(raw);
  state.productType = saved.type || 'phone';
  sideBtns.forEach((button) => button.classList.toggle('active', button.dataset.type === state.productType));
  applyTypeConfig();

  el.tierSelect.value = saved.tier || 'mid';
  refreshTierOptions();

  el.deviceBrand.value = saved.brand || el.deviceBrand.value;
  el.deviceModel.value = saved.model || el.deviceModel.value;
  el.cpuSelect.value = saved.cpuIndex || el.cpuSelect.value;
  el.gpuSelect.value = saved.gpuIndex || el.gpuSelect.value;
  el.ramSelect.value = saved.ram || el.ramSelect.value;
  el.dynamicRamToggle.checked = Boolean(saved.dynamicRamEnabled) && activeConfig().showDynamicRam;
  el.dynamicRamSelect.disabled = !el.dynamicRamToggle.checked;
  el.dynamicRamSelect.value = saved.dynamicRam || el.dynamicRamSelect.value;
  el.storageSelect.value = saved.storage || el.storageSelect.value;
  el.storageType.value = saved.storageType || el.storageType.value;

  state.selectedSensors = new Set(saved.sensors || [...state.selectedSensors]);
  renderSensors(activeConfig().sensors);

  if (activeConfig().showCamera) {
    state.cameraCount = Math.max(activeConfig().cameraRange[0], Math.min(activeConfig().cameraRange[1], Number(saved.cameraCount || activeConfig().cameraRange[1])));
    el.cameraCount.value = String(state.cameraCount);
    el.cameraCountLabel.textContent = state.productType === 'pc' ? '1 webcam' : `${state.cameraCount} fotocamere`;
    renderCameraInputs();
  }

  el.priceInput.value = saved.price || el.priceInput.value;
  updateLiveSpecs();
}

function buildCard() {
  if (!validatePrice()) return;
  const data = collectData();
  const lenses = new Array(Math.max(1, state.cameraCount)).fill('<div class="lens"></div>').join('');

  el.productCard.innerHTML = `
    <div class='phone-render'><div class='lens-grid'>${lenses}</div></div>
    <div>
      <p class='eyebrow'>Custom Build Ready</p>
      <h3 class='product-title'>${el.deviceBrand.value} ${el.deviceModel.value}</h3>
      <div>
        <span class='badge'>${state.productType.toUpperCase()}</span>
        <span class='badge'>${el.tierSelect.value}</span>
        <span class='badge'>${currentCPU()?.brand || 'N/D'}</span>
        <span class='badge'>${currentGPU()?.brand || 'N/D'}</span>
      </div>
      <p class='price'>${data.prezzo}</p>
      <div class='spec-list'>
        ${Object.entries(data)
          .filter(([key]) => key !== 'prezzo')
          .map(([key, value]) => `<div class='spec-item'><span>${key.toUpperCase()}</span><strong>${value}</strong></div>`)
          .join('')}
      </div>
    </div>
  `;

  el.outputPanel.hidden = false;
  el.outputPanel.scrollIntoView({ behavior: 'smooth' });
}

function init() {
  applyTypeConfig();

  sideBtns.forEach((button) => {
    button.addEventListener('click', () => {
      sideBtns.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      state.productType = button.dataset.type;
      applyTypeConfig();
    });
  });

  el.tierSelect.addEventListener('change', refreshTierOptions);
  el.cameraCount.addEventListener('input', () => {
    state.cameraCount = Number(el.cameraCount.value);
    el.cameraCountLabel.textContent = state.productType === 'pc' ? '1 webcam' : `${state.cameraCount} fotocamere`;
    renderCameraInputs();
    updateLiveSpecs();
  });

  el.dynamicRamToggle.addEventListener('change', () => {
    el.dynamicRamSelect.disabled = !el.dynamicRamToggle.checked;
    updateLiveSpecs();
  });

  document.body.addEventListener('input', (event) => {
    if (event.target.matches('input, select')) {
      validatePrice();
      updateLiveSpecs();
    }
  });

  el.saveConfigBtn.addEventListener('click', saveConfig);
  el.loadConfigBtn.addEventListener('click', loadConfig);
  el.buildBtn.addEventListener('click', buildCard);
  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  });
}

init();
