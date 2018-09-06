import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const EARTH_LIFE_EXPECTANCY = 9600;
const EARTH_CURRENT_AGE = 4600;

const ERA_DATA = [
  
  // Precambrian
  {name: "Hadean",        color: [216,  53,  77], start: 0, end: 600},
  {name: "Archaen",       color: [237,  30, 145], start: 600, end: 2100},
  {name: "Proterozoic",   color: [240,  89, 120], start: 2100, end: 4058},
  
  // # Phanerozoic

  // ## Paleozoic
  {name: "Cambrian",      color: [138, 170, 120], start: 4058, end: 4112},
  {name: "Ordovician",    color: [138, 170, 120], start: 4112, end: 4156},
  {name: "Silurian",      color: [138, 170, 120], start: 4156, end: 4184},
  {name: "Devonian",      color: [138, 170, 120], start: 4184, end: 4241},
  {name: "Carboniferous", color: [138, 170, 120], start: 4241, end: 4301}, // Can be divided into Mississippian and pennsylvanian
  // {name: "Carboniferous", color: [138, 170, 120], start: 0, end: 1000},
  {name: "Permian",       color: [138, 170, 120], start: 4301, end: 4349},
  
  // ## Mesozoic
  {name: "Triassic",      color: [142,  82, 161], start: 4349, end: 4400},
  {name: "Jurassic",      color: [  0, 185, 231], start: 4400, end: 4455},
  {name: "Cretaceous",    color: [133, 200, 111], start: 4455, end: 4535},
  
  // ## Cenozoic
  {name: "Paleocene",     color: [249, 168, 111], start: 4535, end: 4544},
  {name: "Eocene",        color: [249, 168, 111], start: 4544, end: 4566},
  {name: "Oligocene",     color: [249, 168, 111], start: 4566, end: 4577},
  
  {name: "Neogene",       color: [255, 220,   1], start: 4577, end: 4597},
  
  {name: "Pleistocene",   color: [255, 247, 154], start: 4597, end: 4599.98},
  {name: "Holocene",      color: [255, 247, 154], start: 4599.98, end: 4600.1},
  {name: "Future",        color: [240, 240, 240], start: 4600.1, end: EARTH_LIFE_EXPECTANCY}
];

function getEarthData(age) {
  let i = age;

  if (i < 0) {
    return "???";
// Hadean Eon
  } else if (i < 600) {
    return {n: 0, eon: "Hadean", oxygen: 0};
// Archean Eon
  } else if (i < 1000) {
    return {n: 1, era: "Eoarchean", eon: "Archean", oxygen: 0};
  } else if (i < 1400) {
    return {n: 1, era: "Paleoarchean", eon: "Archean", oxygen: 0};
  } else if (i < 1800) {
    return {n: 1, era: "Mesoarchean", eon: "Archean", oxygen: 0};
  } else if (i < 2100) {
    return {n: 1, era: "Neoarchean", eon: "Archean", oxygen: 0};
// Proterozoic Eon
// Paleoproterozoic Era
  } else if (i < 2280) {
    var oxygen;
    if (i < 2200) {
      oxygen = 0;
    } else if (i < 2221) {
      oxygen = 0.1;
    } else if (i < 2234) {
      oxygen = 0.2;
    } else if (i < 2247) {
      oxygen = 0.3;
    } else if (i < 2267) {
      oxygen = 0.4;
    } else if (i < 2280) {
      oxygen = 0.5;
    }
    return {n: 2, period: "Siderian", era: "Paleoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 2450) {
    var oxygen;
    if (i < 2298) {
      oxygen = 0.6;
    } else if (i < 2312) {
      oxygen = 0.7;
    } else if (i < 2325) {
      oxygen = 0.8;
    } else if (i < 2338) {
      oxygen = 0.9;
    } else if (i < 2358) {
      oxygen = 1;
    } else if (i < 2371) {
      oxygen = 1.1;
    } else if (i < 2384) {
      oxygen = 1.2;
    } else if (i < 2403) {
      oxygen = 1.3;
    } else if (i < 2416) {
      oxygen = 1.4;
    } else if (i < 2429) {
      oxygen = 1.5;
    } else if (i < 2450) {
      oxygen = 1.6;
    }
    return {n: 2, period: "Rhyacian", era: "Paleoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 2800) {
    var oxygen;
    if (i < 2462) {
      oxygen = 1.7;
    } else if (i < 2475) {
      oxygen = 1.8;
    } else if (i < 2495) {
      oxygen = 1.9;
    } else if (i < 2501) {
      oxygen = 2;
    } else if (i < 2520) {
      oxygen = 2.1;
    } else if (i < 2533) {
      oxygen = 2.2;
    } else if (i < 2553) {
      oxygen = 2.3;
    } else if (i < 2559) {
      oxygen = 2.4;
    } else if (i < 2585) {
      oxygen = 2.5;
    } else if (i < 2592) {
      oxygen = 2.6;
    } else if (i < 2611) {
      oxygen = 2.7;
    } else if (i < 2618) {
      oxygen = 2.8;
    } else if (i < 2650) {
      oxygen = 2.9;
    } else if (i < 2670) {
      oxygen = 3;
    } else if (i < 2683) {
      oxygen = 3.1;
    } else if (i < 2702) {
      oxygen = 3.2;
    } else if (i < 2715) {
      oxygen = 3.3;
    } else if (i < 2728) {
      oxygen = 3.4;
    } else if (i < 2741) {
      oxygen = 3.5;
    } else if (i < 2754) {
      oxygen = 3.6;
    } else if (i < 2800) {
      oxygen = 3.7;
    }
    return {n: 2, period: "Orosirian", era: "Paleoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 3000) {
    return {n: 2, period: "Statherian", era: "Paleoproterozoic", eon: "Proterozoic", oxygen: 3.8};
// Mesoproterozoic Era
  } else if (i < 3200) {
    return {n: 2, period: "Calymmian", era: "Mesoproterozoic", eon: "Proterozoic", oxygen: 3.8};
  } else if (i < 3400) {
    var oxygen;
    if (i < 3249) {
      oxygen = 3.8;
    } else if (i < 3400) {
      oxygen = 3.9;
    }
    return {n: 2, period: "Ectasian", era: "Mesoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 3600) {
    var oxygen;
    if (i < 3561) {
      oxygen = 3.9;
    } else if (i < 3600) {
      oxygen = 4;
    }
    return {n: 2, period: "Stenian", era: "Mesoproterozoic", eon: "Proterozoic", oxygen: oxygen};
// Neoproterozoic Era
  } else if (i < 3750) {
    if (i < 3652) {
      oxygen = 4;
    } else if (i < 3671) {
      oxygen = 4.1;
    } else if (i < 3684) {
      oxygen = 4.3;
    } else if (i < 3691) {
      oxygen = 4.4;
    } else if (i < 3704) {
      oxygen = 4.5;
    } else if (i < 3717) {
      oxygen = 4.7;
    } else if (i < 3723) {
      oxygen = 4.8;
    } else if (i < 3736) {
      oxygen = 4.9;
    } else if (i < 3743) {
      oxygen = 5;
    } else if (i < 3750) {
      oxygen = 5.1;
    }
    return {n: 2, period: "Tonian", era: "Neoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 3970) {
    var oxygen;
    if (i < 3756) {
      oxygen = 5.3;
    } else if (i < 3762) {
      oxygen = 5.4;
    } else if (i < 3769) {
      oxygen = 5.5;
    } else if (i < 3775) {
      oxygen = 5.7;
    } else if (i < 3782) {
      oxygen = 5.9;
    } else if (i < 3795) {
      oxygen = 6.1;
    } else if (i < 3801) {
      oxygen = 6.2;
    } else if (i < 3808) {
      oxygen = 6.4;
    } else if (i < 3814) {
      oxygen = 6.6;
    } else if (i < 3821) {
      oxygen = 6.8;
    } else if (i < 3827) {
      oxygen = 6.9;
    } else if (i < 3834) {
      oxygen = 7.1;
    } else if (i < 3840) {
      oxygen = 7.3;
    } else if (i < 3847) {
      oxygen = 7.5;
    } else if (i < 3853) {
      oxygen = 7.8;
    } else if (i < 3860) {
      oxygen = 8.1;
    } else if (i < 3866) {
      oxygen = 8.4;
    } else if (i < 3873) {
      oxygen = 8.7;
    } else if (i < 3879) {
      oxygen = 9;
    } else if (i < 3886) {
      oxygen = 9.3;
    } else if (i < 3892) {
      oxygen = 9.6;
    } else if (i < 3899) {
      oxygen = 9.9;
    } else if (i < 3905) {
      oxygen = 10.2;
    } else if (i < 3912) {
      oxygen = 10.6;
    } else if (i < 3918) {
      oxygen = 11.1;
    } else if (i < 3925) {
      oxygen = 11.4;
    } else if (i < 3931) {
      oxygen = 11.8;
    } else if (i < 3938) {
      oxygen = 12.2;
    } else if (i < 3944) {
      oxygen = 12.6;
    } else if (i < 3951) {
      oxygen = 12.9;
    } else if (i < 3957) {
      oxygen = 13.3;
    } else if (i < 3964) {
      oxygen = 13.7;
    } else if (i < 3970) {
      oxygen = 14.1;
    }
    return {n: 2, period: "Cryogenian", era: "Neoproterozoic", eon: "Proterozoic", oxygen: oxygen};
  } else if (i < 4058) {
    var oxygen;
    if (i < 3977) {
      oxygen = 14.4;
    } else if (i < 3983) {
      oxygen = 14.7;
    } else if (i < 3990) {
      oxygen = 15;
    } else if (i < 4003) {
      oxygen = 15.3;
    } else if (i < 4009) {
      oxygen = 15.5;
    } else if (i < 4016) {
      oxygen = 15.6;
    } else if (i < 4022) {
      oxygen = 15.7;
    } else if (i < 4029) {
      oxygen = 15.8;
    } else if (i < 4035) {
      oxygen = 15.9;
    } else if (i < 4048) {
      oxygen = 16.1;
    } else if (i < 4055) {
      oxygen = 16.3;
    } else if (i < 4058) {
      oxygen = 16.4;
    }
    return {n: 2, period: "Ediacaran", era: "Neoproterozoic", eon: "Proterozoic", oxygen: oxygen};
// Phanerozoic Eon
// Paleozoic Era
  } else if (i < 4112) {
    var oxygen;
    if (i < 4061) {
      oxygen = 16.4;
    } else if (i < 4094) {
      oxygen = 16.6;
    } else if (i < 4112) {
      oxygen = 16.7;
    }
    return {n: 3, period: "Cambrian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4156) {
    var oxygen;
    if (i < 4126) {
      oxygen = 16.8;
    } else if (i < 4133) {
      oxygen = 16.9;
    } else if (i < 4139) {
      oxygen = 17.1;
    } else if (i < 4146) {
      oxygen = 17.3;
    } else if (i < 4152) {
      oxygen = 17.5;
    } else if (i < 4156) {
      oxygen = 17.8;
    }
    return {n: 4, period: "Ordovician", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4184) {
    var oxygen;
    if (i < 4159) {
      oxygen = 17.8;
    } else if (i < 4165) {
      oxygen = 18.2;
    } else if (i < 4172) {
      oxygen = 18.8;
    } else if (i < 4178) {
      oxygen = 19.3;
    } else if (i < 4184) {
      oxygen = 19.9;
    }
    return {n: 5, period: "Silurian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4241) {
    var oxygen;
    if (i < 4185) {
      oxygen = 19.9;
    } else if (i < 4191) {
      oxygen = 20.5;
    } else if (i < 4198) {
      oxygen = 21.1;
    } else if (i < 4204) {
      oxygen = 21.9;
    } else if (i < 4211) {
      oxygen = 22.7;
    } else if (i < 4217) {
      oxygen = 23.6;
    } else if (i < 4224) {
      oxygen = 24.5;
    } else if (i < 4230) {
      oxygen = 25.4;
    } else if (i < 4237) {
      oxygen = 26.4;
    } else if (i < 4241) {
      oxygen = 27.4;
    }
    return {n: 6, period: "Devonian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4282) {
    var oxygen;
    if (i < 4243) {
      oxygen = 27.4;
    } else if (i < 4250) {
      oxygen = 28.3;
    } else if (i < 4256) {
      oxygen = 29.2;
    } else if (i < 4263) {
      oxygen = 30;
    } else if (i < 4269) {
      oxygen = 30.9;
    } else if (i < 4276) {
      oxygen = 31.4;
    } else if (i < 4282) {
      oxygen = 32.1;
    }
    return {n: 7, period: "Mississippian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4301) {
    var oxygen;
    if (i < 4289) {
      oxygen = 32.6;
    } else if (i < 4295) {
      oxygen = 33;
    } else if (i < 4301) {
      oxygen = 33.2;
    }
    return {n: 7, period: "Pennsylvanian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4349) {
    var oxygen;
    if (i < 4307) {
      oxygen = 33.2;
    } else if (i < 4315) {
      oxygen = 32.7;
    } else if (i < 4321) {
      oxygen = 32.1;
    } else if (i < 4328) {
      oxygen = 31;
    } else if (i < 4334) {
      oxygen = 29.8;
    } else if (i < 4341) {
      oxygen = 28.7;
    } else if (i < 4347) {
      oxygen = 27.5;
    } else if (i < 4349) {
      oxygen = 26.4;
    }
    return {n: 8, period: "Permian", era: "Paleozoic", eon: "Phanerozoic", oxygen: oxygen};
// Mesozoic Era
  } else if (i < 4400) {
    var oxygen;
    if (i < 4354) {
      oxygen = 26.4;
    } else if (i < 4360) {
      oxygen = 25.4;
    } else if (i < 4367) {
      oxygen = 24.3;
    } else if (i < 4373) {
      oxygen = 23;
    } else if (i < 4380) {
      oxygen = 22.2;
    } else if (i < 4386) {
      oxygen = 21.6;
    } else if (i < 4393) {
      oxygen = 21;
    } else if (i < 4399) {
      oxygen = 20.8;
    } else if (i < 4400) {
      oxygen = 20.6;
    }
    return {n: 9, period: "Triassic", era: "Mesozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4455) {
    var oxygen;
    if (i < 4406) {
      oxygen = 20.6;
    } else if (i < 4419) {
      oxygen = 20.4;
    } else if (i < 4438) {
      oxygen = 20.2;
    } else if (i < 4445) {
      oxygen = 20.3;
    } else if (i < 4451) {
      oxygen = 20.4;
    } else if (i < 4455) {
      oxygen = 20.5;
    }
    return {n: 10, period: "Jurassic", era: "Mesozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4535) {
    var oxygen;
    if (i < 4458) {
      oxygen = 20.5;
    } else if (i < 4464) {
      oxygen = 20.8;
    } else if (i < 4471) {
      oxygen = 21.1;
    } else if (i < 4477) {
      oxygen = 21.4;
    } else if (i < 4484) {
      oxygen = 21.7;
    } else if (i < 4490) {
      oxygen = 21.9;
    } else if (i < 4497) {
      oxygen = 22.1;
    } else if (i < 4510) {
      oxygen = 22.4;
    } else if (i < 4529) {
      oxygen = 22.6;
    } else if (i < 4535) {
      oxygen = 22.7;
    }
    return {n: 11, period: "Cretaceous", era: "Mesozoic", eon: "Phanerozoic", oxygen: oxygen};
// Cenozoic Era
  } else if (i < 4544) {
    return {n: 12, epoch: "Paleocene", period: "Tertiary", era: "Cenozoic", eon: "Phanerozoic", oxygen: 22.7};
  } else if (i < 4566) {
    var oxygen;
    if (i < 4549) {
      oxygen = 22.7;
    } else if (i < 4556) {
      oxygen = 22.6;
    } else if (i < 4562) {
      oxygen = 22.4;
    } else if (i < 4566) {
      oxygen = 22.1;
    }
    return {n: 13, epoch: "Eocene", period: "Tertiary", era: "Cenozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4577) {
    var oxygen;
    if (i < 4569) {
      oxygen = 22.1;
    } else if (i < 4575) {
      oxygen = 21.8;
    } else if (i < 4577) {
      oxygen = 21.4;
    }
    return {n: 14, epoch: "Oligocene", period: "Tertiary", era: "Cenozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4595) {
    var oxygen;
    if (i < 4582) {
      oxygen = 21.4;
    } else if (i < 4588) {
      oxygen = 21.1;
    } else if (i < 4595) {
      oxygen = 21;
    }
    return {n: 15, epoch: "Miocene", period: "Tertiary", era: "Cenozoic", eon: "Phanerozoic", oxygen: oxygen};
  } else if (i < 4597) {
    return {n: 15, epoch: "Pliocene", period: "Tertiary", era: "Cenozoic", eon: "Phanerozoic", oxygen: 21};
  } else if (i < 4599.98) {
    return {n: 16, epoch: "Pleistocene", period: "Quarternary", era: "Cenozoic", eon: "Phanerozoic", oxygen: 21};
  } else if (i <= 4600) {
    return {n: 17, epoch: "Holocene", period: "Quarternary", era: "Cenozoic", eon: "Phanerozoic", oxygen: 21};
  } else if (i < 4601) {
    return {n: 18, future: "Future A"};
  } else if (i < 4650) {
    return {n: 18, future: "Future B"};
  } else if (i < 5600) {
    return {n: 18, future: "Future C"};
  } else if (i < 8600) {
    return {n: 18, future: "Future D"};
  } else if (i < 9600) {
    return {n: 18, future: "Future E"};
  } else {
    return {n: 18, future: "Future F"};
  }
}

function format_number_to_string(number) {
  let n = Math.round(number); 
  return String(n).replace(/(\d)(?=\d{3})/, '$1,');
}

function format_human_age(number) {
  let years = Math.floor(number);
  let months = Math.floor( (number - years) * 12);
  return {years: String(years), months: String(months)};
}


class App extends Component {
  render() {
    return (
      <div className="App ea-background">
        <header className="App-header">
          <h1 className="App-title">Earth Age</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <AppLogicContainer />
      </div>
    );
  }
}


class AppLogicContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {container: "A"};
  }

  render() {
    if (this.state.container == "A") {
      return (
        <div style={{position: 'relative'}}>
          <ContainerA parent={this} />
        </div>
      );
    } else {
      return (
        <div style={{position: 'relative'}}>
          <ContainerB parent={this} />
        </div>
      );
    }
  }
}


class ContainerA extends Component {
  constructor(props) {
    super(props);

    this.state = {n: 0};
    this.onNext = this.onNext.bind(this);
  }

  onNext(e) {
    console.log("next intro pic");
    if (this.state.n == 9) {
      this.props.parent.setState({container: "B"});
    }
    else {
      this.setState({n: this.state.n + 1});
    }
  }

  render() {
    // let style = {"display": this.state.visible ? "unset" : "none"};
    const texts = [
      'Did you ever wonder how old you are in Earth Years?',
      'Earth years?!',
      'It’s like dog years?!',
      'Dogs don’t live very long. On average,\ndogs age about 7 people years for every year of the dog’s life.\n So, 1 dog year equals 7 people years.',
      'Earth, like your dog, has a beginning and an end.\n Today, at 4.6 billion years old, Earth is middle-aged.',
      'In about 5 billion years, when Earth is almost 10 billion years old,\nthe sun will swell as a Red Giant consuming Earth or blowing it off into the universe as a cinder in space.',
      'People don’t live very long in comparison to the duration of Earth.',
      'If you were to live to be 100, you would age about 100 million Earth Years for every year of your life.',
      'One Person Year is about 100 million Earth Years.',
      'But it isn’t that simple. Earth will endure about 9,567 million years.\nAnd average life expectancies of people vary by country and gender.\nWith this app you can discover your age in Earth Years, and where you fit on the geologic time scale.'
    ];

    const n = this.state.n;
    const images = texts.map((_,i) => 
      <img className='intro-pic' src={`intro${i+1}.jpg`} style={{"display": i == n ? "unset" : "none"}}/>
    );
  
    return (
      <div className='ea-container-a center'>
        <p className='intro-text'>{texts[this.state.n]}</p>
        {images}
        <i className="intro-arrow fas fa-angle-right fa-5x" onClick={this.onNext}></i>
      </div>
    );
  }
}

class ContainerB extends Component {
  constructor(props) {
    super(props);
    
    this.onSliderUpdate = this.onSliderUpdate.bind(this);
    this.nextEra = this.nextEra.bind(this);
    this.prevEra = this.prevEra.bind(this);
    this.setAge = this.setAge.bind(this);

    const age_data = getEarthData(EARTH_CURRENT_AGE);

    console.log('Container B, age_data', age_data);

    this.state = {sliderAge: EARTH_CURRENT_AGE, ageData: age_data};
  }

  onSliderUpdate(age) {
    // console.log(age);
    // getEarthData(age);
    this.setAge(age);
  }

  setAge(age) {
    const age_data = getEarthData(age);
    // console.log('onsliderupdate', age, age_data);
    const ageEnd = ERA_DATA[this.state.ageData.n].end;

    this.setState({sliderAge: age, ageData: age_data});
  }

  nextEra() {
    const new_age = ERA_DATA[this.state.ageData.n + 1].start;
    this.setAge(new_age);
  }

  prevEra() {
    const new_age = ERA_DATA[this.state.ageData.n - 1].start;
    this.setAge(new_age);
  }

  render() {
    let human_age = format_human_age(this.state.sliderAge/EARTH_LIFE_EXPECTANCY*80);

    let you_are_age_text;
    if (human_age.years == 0) {
      you_are_age_text = <p>If you are <b>{human_age.months}</b> months old, your age in Earth years is <b>{format_number_to_string(this.state.sliderAge)} million</b> years.</p>;

    } else {
      const s = human_age.years > 1 ? 's' : '';
      you_are_age_text = <p>If you are <b>{human_age.years}</b> year{s} old, your age in Earth years is <b>{format_number_to_string(this.state.sliderAge)} million</b> years.</p>;
    }

    return (
      <div className='ea-container-b center'>
        <p style={{"font-size": 28, "margin": 3}}>Today the Earth is {format_number_to_string(EARTH_CURRENT_AGE)} million years old.</p>
        {you_are_age_text}
        <AgeSlidersContainer onSliderUpdate={this.onSliderUpdate} ageData={this.state.ageData} sliderAge={this.state.sliderAge} />
        <EraCardsContainer sliderAge={this.state.sliderAge} onCardForward={this.nextEra} onCardBackward={this.prevEra} />
      </div>
    );
  }
}

function human_age_slider(props) {
  const {ctx, x, y, sliderWidth, sliderPos} = props;
  
  const max_age = 80;

  const width = sliderWidth;  
  const slider_height = 30;
  const slider_offset_y = 10;
  const slider_offset_x = 20;

  ctx.font="14px Helvetica";
  

  // ctx.
  // ctx.fillStyle="#FF0000";
  // ctx.rect();
  ctx.strokeStyle="#000000";
  ctx.strokeRect(x+slider_offset_x, y+slider_offset_y + 15, width, 0);
  
  ctx.beginPath();
  ctx.moveTo(x + width * sliderPos + slider_offset_x, y+slider_offset_y);
  ctx.lineTo(x + width * sliderPos + slider_offset_x, y+slider_offset_y+ 0.8*slider_height);
  ctx.strokeStyle= "#FF1212";
  ctx.stroke();

  // Bottom text
  // ctx.moveTo(x, y);
  // ctx.strokeStyle="#505050";
  ctx.fillStyle="#000000";

  ctx.fillText("Human age", slider_offset_x, y);

  ctx.fillText("0", slider_offset_x+5, y+slider_offset_y+slider_height);
  ctx.fillText(String(max_age), slider_offset_x+width, y+slider_offset_y+slider_height);

  // Top text
  const age = format_human_age(sliderPos*max_age);

  const s = age.years > 1 ? 's' : '';
  let age_str = `${age.years} year${s}`;
  let offset_x = 5;

  if (sliderPos > 0.42 && sliderPos < 0.48 && age.months > 0) {
    age_str += ` ${age.months} month`;
    // offset_x = 5;
    
    if (age.months > 1) {
      age_str += 's';
    }
  }

  let x_pos = x + width*sliderPos + slider_offset_x + offset_x;
  if (x_pos < 5) { x_pos = 5; };

  ctx.fillText(age_str, x_pos, y+slider_offset_y+5);

  return {x: x+slider_offset_x, y: y+slider_offset_y, width: sliderWidth, height: slider_height};
}

function earth_age_slider(props) {
  const {ctx, x, y, sliderWidth, sliderPos} = props;
  
  const width = sliderWidth;  
  const slider_height = 30;
  const slider_offset_y = 25;
  const slider_offset_x = 20;

  ctx.font="14px Helvetica";

    
  for (let i = 0; i < ERA_DATA.length; i++) {
    const age = ERA_DATA[i];
    ctx.fillStyle = `rgb(${age.color})`;
    const age_width = (age.end - age.start) / EARTH_LIFE_EXPECTANCY;
    ctx.fillRect(age.start / EARTH_LIFE_EXPECTANCY * width + x + slider_offset_x, y+slider_offset_y, width * age_width, slider_height);
  }

  // ctx.
  // ctx.fillStyle="#FF0000";
  // ctx.rect();
  ctx.beginPath();
  ctx.strokeStyle="#000000";
  ctx.strokeRect(x+slider_offset_x, y+slider_offset_y, width, 30);

  ctx.moveTo(x + width * sliderPos + slider_offset_x, y+slider_offset_y-4);
  ctx.lineTo(x + width * sliderPos + slider_offset_x, y+slider_offset_y+slider_height);
  ctx.strokeStyle= "#FF1212";
  ctx.stroke();

  // Bottom text
  // ctx.moveTo(x, y);
  // ctx.strokeStyle="#505050";
  ctx.fillStyle="#000000";
  
  ctx.fillText("Earth age", slider_offset_x, y);

  ctx.fillText("0", slider_offset_x+5, y+slider_offset_y+slider_height+15);
  ctx.fillText(`${String(EARTH_LIFE_EXPECTANCY)}`, slider_offset_x+width-25, y+slider_offset_y+slider_height+15);
  ctx.fillText('million', slider_offset_x+width-30, y+slider_offset_y+slider_height+30);

  ctx.fillText(`${String(Math.round(sliderPos*EARTH_LIFE_EXPECTANCY))} million years`, x+ width*sliderPos + slider_offset_x - 6, y+slider_offset_y - 5);

  return {x: x+slider_offset_x, y: y+slider_offset_y, width: sliderWidth, height: slider_height};
}

function boundsTest(point, rect) {
  const {x, y} = point;
  const r = rect;
  return x > r.x && x < r.x + r.width && y > r.y && y < r.y + r.height;
}


class AgeSlidersContainer extends Component {
  constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);

    // this.state = {sliderPos: 0.5};
    // this.state = {sliderPos: 0.5};
    this.width = 850;
    this.height = 240;
  }


  onMouseDown(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    // console.log(x,y);

    // const human_age_slider_bounds = {x: 5, y: 20, width: }
    const ha_bounds = this.ha_slider_bounds;

    // console.log(ha_bounds);

    if (boundsTest({x: x, y: y}, this.ha_slider_bounds)) {
      const sliderPos = (x - this.ha_slider_bounds.x) / this.ha_slider_bounds.width;
      // console.log(sliderPos);
      // this.setState({sliderPos: sliderPos});
      this.props.onSliderUpdate(sliderPos*EARTH_LIFE_EXPECTANCY);
    } else if (boundsTest({x: x, y: y}, this.ea_slider_bounds)) {
      const sliderPos = (x - this.ea_slider_bounds.x) / this.ea_slider_bounds.width;
      // console.log(sliderPos);
      // this.setState({sliderPos: sliderPos});
      this.props.onSliderUpdate(sliderPos*EARTH_LIFE_EXPECTANCY);
    }

  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    console.log('n', this.props.ageData.n);
    
    const data = ERA_DATA[this.props.ageData.n]

    const color =  data.color;

    const color_str = `rgb(${color})`;
    console.log(color_str);

    const sliderPos = this.props.sliderAge / EARTH_LIFE_EXPECTANCY;

    console.log('sliderPos: ', sliderPos);

    // const length = (data.end - data.start) / EARTH_LIFE_EXPECTANCY;

    const ctx = this.refs.slider_canvas.getContext('2d');
    ctx.clearRect(0, 0, 1000, 300);
    // ctx.fillRect(0,0, 100, 100);

    // Human age slider
    // var margin_top = 50;

    this.ha_slider_bounds = human_age_slider({ctx: ctx, x: 5, y: 30, sliderWidth: 780, sliderPos: sliderPos});
    this.ea_slider_bounds = earth_age_slider({ctx: ctx, x: 5, y: 20+85, sliderWidth: 780, sliderPos: sliderPos});

    const age_start_x = data.start / EARTH_LIFE_EXPECTANCY * this.ea_slider_bounds.width;
    const age_end_x = age_start_x + (data.end - data.start) / EARTH_LIFE_EXPECTANCY * this.ea_slider_bounds.width;

    // Draw the trapezoid shape.
    const pt_1 = {x: this.ea_slider_bounds.x + age_start_x, 
                  y: this.ea_slider_bounds.y + this.ea_slider_bounds.height};
    const pt_2 = {x: 174+2, y: this.height};
    const pt_3 = {x: 174+500+3, y: this.height};
    const pt_4 = {x: age_end_x + 24, y: pt_1.y};

    ctx.beginPath();
    ctx.moveTo(pt_1.x, pt_1.y);
    ctx.lineTo(pt_2.x, pt_2.y);
    ctx.lineTo(pt_3.x, pt_3.y);
    ctx.lineTo(pt_4.x, pt_4.y);
    ctx.closePath();
    ctx.fillStyle=color_str;
    ctx.fill();

    ctx.strokeStyle="#1538A9";
    ctx.beginPath();
    ctx.moveTo(pt_1.x, pt_1.y);
    ctx.lineTo(pt_2.x, pt_2.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pt_4.x, pt_4.y);
    ctx.lineTo(pt_3.x, pt_3.y);
    ctx.stroke();
  }


  render() {
      
    // const canvas = 

    return (
      <canvas ref="slider_canvas" width={this.width} height={this.height} style={{position: 'relative', left: -24, display: 'block', backgroundColor: '#ffffff82'}} onMouseDown={this.onMouseDown} />
    );
  }
}


class EraCardsContainer extends Component {
  render() {
    
    const age_data = getEarthData(this.props.sliderAge);

    console.log('render n=', age_data.n, getEarthData(this.props.sliderAge));

    return (
      <div className='ea-era-cards-container' style={{width: 1000, height: 400, position: 'relative', display: 'block'}}>
        <EraLeftCard eraIndex={age_data.n} onClick={this.props.onCardBackward} />
        <EraRightCard eraIndex={age_data.n} onClick={this.props.onCardForward} />
        <EraCenterCard eraIndex={age_data.n} ageData={age_data} />
      </div>
    );
  }
}

class EraLeftCard extends Component {

  render() {
    const n = this.props.eraIndex;
    var div_inner;

    if (n == 0) {
      // No card left card.
      
      return (
        <div className='ea-era-card-left' style={{width: 150, height: 300, top: 50, position: 'absolute', display: 'block', visibility: 'hidden'}}>
        </div>
      );

    } else {
      const age_data = ERA_DATA[n-1];
      const card_label = render_card_label(n-1, age_data);
      
      return (
        <div className='ea-era-card-left' style={{width: 150, height: 300, top: 50, position: 'absolute', display: 'block'}}>
          {card_label}
          <i className="card-arrow fas fa-angle-left fa-5x" style={{color: `rgb(${age_data.color})`}} onClick={this.props.onClick}></i>
        </div>
      ); 

    }
  }
}

class EraCenterCard extends Component {

  render() {
    // const era_name = `Era Name N=${this.props.eraIndex}`;
    
    const n = this.props.eraIndex;
    const eon_name = this.props.ageData.eon;
    const era_name = this.props.ageData.era;
    const oxygen = this.props.ageData.oxygen;

    let card_body;
    

    if (this.props.eraIndex == 0) {
      card_body = (
        <div>
        <p>During this age a human is born, learns to crawl, walk and run.</p>
        <p>Earth is created and the Moon forms after a collision with a large asteroid.</p> 
        <p>The oceanic crust cools from the molten Earth. Oceans accumulate and the first continental crust forms.</p>
        <p>There is no oxygen and the atmosphere is choked with carbon dioxide. There is no ozone layer to block incoming UV radiation.</p>
        </div>
      );
    }

    let eon_title = "";
    if (eon_name) {
      eon_title += `${eon_name} Eon`
    }


    return (
      <div className='ea-era-card-center' style={{width: 500, height: 400, left: 150, position: 'absolute', display: 'block'}}>
        <h2>{eon_name} eon Eon: {eon_name} Era: {era_name}</h2>
        <p>Oxygen: {oxygen}%</p>

        {card_body}

      </div>
    );
  }
}

class EraRightCard extends Component {
  render() {
    const n = this.props.eraIndex;
    var div_inner;

    if (n == 18) {
      // No card after this.
      
      return (
        <div className='ea-era-card-left' style={{width: 150, height: 300, top: 50, position: 'absolute', display: 'block', visibility: 'hidden'}}>
        </div>
      );

    } else {
      const age_data = ERA_DATA[n+1];
      const card_label = render_card_label(n+1, age_data);

      return (
        <div className='ea-era-card-right' style={{width: 150, height: 300, left: 650, top: 50, position: 'absolute', display: 'block'}}>
          {card_label}
          <i className="card-arrow fas fa-angle-right fa-5x" style={{color: `rgb(${age_data.color})`}} onClick={this.props.onClick}></i>
        </div>
      );
    }
  }
}

function render_card_label(n, age_data) {
  const era_name = `${age_data.name}`;

  let label_color = age_data.color;
  if (n == 9) {
    label_color = [206, 139, 227];
  }
  let size_class = '';
  if (n == 7) {
    size_class = 'small-h2';
  }

  return (<h2 className={size_class + " ea-era-card-label"} style={{color: `rgb(${label_color})`}}>{era_name}</h2>);
}



export default App;
