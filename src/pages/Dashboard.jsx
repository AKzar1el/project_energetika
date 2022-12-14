import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Line, StackedArea100, Stacked, Pie, MultiplePanes, LineChart, SparkLine, StackedColumn } from '../components';
import { Y2019, Y2020, oveX, pie2019, pie2020, bil2019, bil2020, bil2021, vsaX, vsaY, cenaDobX, cenaDobY, cenaDob, skupnaX, skupnaY, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, skupnaPoraba, stacked2021, pie2021, colorMappingSeries, dropdownData, SparklineAreaData, ecomPieChartData, pieChartData, lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, LineOVEYAxis, lineOVESeries } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import header from './homepage.jpg';
import ove from './ove.png';
import images from './images.png';
import slo from './slo.png';
import tacho from './tachometer.png';
import bolt from './bolt.png';
import shareVideo from './HSE-final.mp4';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  variant: 'rounded'
};


const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  const [currentFruit, setCurrentFruit] = useState('vsa');
  console.log(currentFruit);
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }
  var skp = 0;
  var div11 = 0;
  var div12 = 0;
  var div13 = 0;

  var div21 = 0;
  var div22 = 0;
  var div23 = 0;
  var div24 = 0;

  var div31 = 0;

  var div41 = 0;

  var div51 = 0;
  var div52 = 0;
  var div53 = 0;

  const renderX = (param) => {
    switch(param) {
      case 'vsa':
        return ColorMappingPrimaryXAxis;
      default:
        return vsaX;
    }
  }

  const renderY = (param) => {
    switch(param) {
      case '2019':
        return Y2019;
      case '2020':
        return Y2020;
      case 'vsa':
        return ColorMappingPrimaryYAxis;
      default:
        return vsaY;
    }
  }

  const renderSwitch = (param) => {
    switch(param) {
      case '2019':
        return pie2019;
      case '2020':
        return pie2020;
      case '2021':
        return pie2021;
      default:
        return pieChartData;
    }
  }

  const renderSwitch2 = (param) => {
    switch(param) {
      case '2019':
        skp=15423;
        div11=9.021;
        div12=6.577;
        div13="+6,3 %";
        div21="83,50-% ";
        div22="pokritost porabe elektri??ne energije ";
        div23="z doma??o proizvodnjo";
        div24="";
        div31="145,20";
        div41="22,00 ";
        div51="Slovenija v 2019";
        div52="neto uvoznica";
        div53="elektri??ne energije";
        return bil2019; 
      case '2020':
        skp=15423;
        div11=7.120;
        div12=6.103;
        div13="+6,3 %";
        div21="92,6-% pokritost porabe";
        div22="elektri??ne energije z doma??o";
        div23="proizvodnjo, najve??ja v zadnjih";
        div24="petih letih";
        div31="145,20";
        div41="25,00 ";
        div51="Epidemija ni vplivala na";
        div52="realizacijo razvojnih na??rtov";
        div53="elektrooperaterjev";
        return bil2020; 
      case '2021':
        skp=15423;
        div11=8.387;
        div12=5.952;
        div13="+6,3 %";
        div21="14,423 GWh";
        div22="proizvedene elektri??ne energije,";
        div23="od tega 36,7 % iz proizvodnih";
        div24="naprav na obnovljive vire energije";
        div31="145,20";
        div41="23,50";
        div51="Slovenija v 2021 neto uvoznica";
        div52="elektri??ne energije";
        div53="distribucijskem sistemu";
        return bil2021;
      default:
        skp="13456";
        div11=14.173;
        div12=13.746;
        div13="+3,9 %";
        div21="14,423 GWh";
        div22=" proizvedene elektri??ne energije,";
        div23="od tega 36,7 % iz proizvodnih";
        div24="naprav na obnovljive vire energije";
        div31="139,10";
        div41="90";
        div51="V letu 2021 zabele??ene";
        div52="najni??je izgube";
        div53="distribucijskem sistemu";
        return colorMappingSeries;
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);

  
  return (
    <div className="">

      <div className="w-full" >
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-[500px] object-fill object-center"
        /> 
      </div>

      <div className="mt-1 shadow-lg pb-12">
        <div className="flex flex-wrap w-full p-1">
          <div className="grid justify-items-start justify-center p-1 mt-2 w-1/2 pl-16 min-[1200px]:pl-0 min-[1850px]:translate-x-[10%] min-[1850px]:">
            <div className="mt-1 font-thin">
              <p className="text-4xl text-[#00758f] font-normal">Stanje Energetike v Sloveniji</p>
              <p className="mt-3 text-2xl font-light" >Dostop do podatkov Slovenije na podro??ju energetike</p>
            </div>
            <div className="mt-3 text-sm">
              <p>Dobrodo??li v orodju za interaktivne podatke.</p>
              <p>
                Razi????ite najnovej??e podatke in trende v energetski industriji z brskanjem po intuitivnih
              </p>
              <p>
                zemljevidih in grafih.
              </p>
            </div>
            <div>
              <p className="mt-3 text-sm">Dostop do energetske statistike:</p>      
            </div>
            <div>
              <ul class="ml-6 list-disc text-sm list-inside mt-3">
                <li>o proizvodnji, porabi in trgovini z nafto, plinom, premogom, energijo in</li>
                <span className="lg:pl-5">obnovljivimi viri;</span>
                <li>o spremembi cen energentov;</li>
                <li>pokritost Slovenije in razmer po svetu;</li>
                <li>od 1990 do 2021.</li>
              </ul> 
            </div>

            <div>
              <p className="mt-3 text-sm">Pridobite ekskluzivne napovedi o srednjero??nih slovenskih in evropskih energetskih </p>
              <p className="text-sm">trendih, ki so posledica ukrajinskih razmer.</p>
            </div>
            <div>
              <p className="text-sm mt-3">Izkoristite uporabniku prijazne funkcije:</p>
            </div>
            <div>
              <ul class="ml-6 list-disc text-sm list-inside mt-3">
                <li>Interaktivni grafi za izbiro obmo??ja z nadzorom pove??ave in pomanj??anja;</li>
                <li>Izbira ??asovnega obdobja;</li>
                <li>Animirani podatki za razvoj v letih od 1990 do 2021;</li>
                <li>Izvoz podatkov globalno ali glede na vir energije.</li>
              </ul>
            </div>
            
          </div>
          <div className="w-1/2 invisible min-[1200px]:visible -translate-x-[10%] mt-12">
            <img src={slo} className="skew-y-0.5 sm:translate-y-10"/>
          </div>
        </div>
        <span className="hidden">
          Podatki Env and Energy: https://www.destatis.de/Europa/EN/Topic/Key-indicators/EnvironmentEnergy.html
          Podatki by topic: https://www.destatis.de/Europa/EN/Topic/_node.html
        </span>
        <div className="mt-12">
          <div class="flex flex-wrap justify-center mb-3 gap-x-4 sm:gap-x-28 mt-6 pb-3">
            <div class="tooltip"> <span class="tooltiptext text-xl font-bold">Klikni me!</span>
              <div onClick={handleOpen} className="rounded-full outline outline-1 outline-offset-0 outline-[#00758f] shadow-lg shadow-[#00758f] hover:shadow-indigo-500/40 p-1
              transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500
              grid justify-items-center w-48 h-48">
                <div className="mt-12 p-1">-12 %</div>
                <div className="">Emisije toplogrednih</div>
                <div className="mb-12">plinov od leta 1990</div>
              </div>
            </div>
            <div class="tooltip"> <span class="tooltiptext text-xl font-bold">Klikni me!</span>
            <div onClick={handleOpen1} className="rounded-full outline outline-1 outline-offset-0 outline-[#00758f] shadow-lg shadow-[#00758f] hover:shadow-indigo-500/40 p-1
            transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 cursor-pointer
            grid justify-items-center w-48 h-48">
              <div className="mt-12 p-1">45 %</div>
              <div className="">Energetska odvisnost Sl</div>
              <div className="mb-12"></div>
            </div>
            </div>
            <div class="tooltip"> <span class="tooltiptext text-xl">Klikni me!</span>
            <div onClick={handleOpen2} className="rounded-full outline outline-1 outline-offset-0 outline-[#00758f] shadow-lg shadow-[#00758f] hover:shadow-indigo-500/40 p-1
            transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:bg-black
            grid justify-items-center w-48 h-48">
              <div className="mt-12 p-1">22 %</div>
              <div className="">Dele?? obnovljive</div>
              <div className="mb-12">energije</div>
            </div>
            </div>
          </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
      
          <Box sx={style} className="model-content">
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Emisije toplogrednih plinov v Sloveniji od leta 1990
              <span className="text-lg block">Neto emisije toplogrednih plinov (vir: <a className="text-blue-700" href="https://ec.europa.eu/eurostat/databrowser/view/SDG_13_10__custom_1397649/bookmark/table?lang=en&bookmarkId=22c6f8a9-9c21-463d-a948-2a4e95bb2961">EEA</a>)</span>
              <span className="text-base text-zinc-500">Zadnja posodobitev podatkov: 01.12.2022 23:00 (pred enim mesecem)</span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <p  className="text-justify">
                Kazalnik meri skupne nacionalne emisije (tako iz sektorjev ESD kot ETS), vklju??no z mednarodnim letalstvom, tako imenovane ???kjotske ko??arice??? toplogrednih plinov, vklju??no z ogljikovim dioksidom (CO2), metanom (CH4), du??ikovim oksidom (N2O) itd. - imenovani F-plini (fluoroogljikovodiki, perfluoroogljikovodiki, du??ikov trifluorid (NF3) in ??veplov heksafluorid (SF6)) iz vseh sektorjev evidence emisij toplogrednih plinov (vklju??no z mednarodnim letalstvom in posrednim CO2). Kazalnik je predstavljen v dveh oblikah: kot neto emisije, vklju??no z rabo zemlji????, spremembami rabe zemlji???? in gozdarstvom (LULUCF) ter brez LULUCF. Z uporabo posameznega potenciala globalnega segrevanja (GWP) vsakega plina se integrirajo v enoten indikator, izra??en v enotah ekvivalentov CO2. Dr??ave ??lanice EU vsako leto predlo??ijo popise emisij TGP Okvirni konvenciji Zdru??enih narodov o spremembi podnebja (UNFCCC).
              </p>            
            </Typography>
            <Box sx={{ mt:5 }}>
              <LineChart primaryX={LinePrimaryXAxis} primaryY={LinePrimaryYAxis} data={lineCustomSeries} />
            </Box>
          </Box>
          
        </Modal>
        <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Energetska odvisnost Slovenije, od leta 2018
              <span className="text-lg block" >Odvisnost od uvoza energije (vir: <a className="text-blue-700" href="https://ec.europa.eu/eurostat/databrowser/view/NRG_IND_ID__custom_75257/bookmark/table?lang=en&bookmarkId=65dcfc55-80f4-46af-9451-1e68e86645cb">Eurostat</a>)</span>
              <span className="text-base text-zinc-500" >Zadnja posodobitev podatkov: 14/04/2022 11:00 (pred 9 meseci)</span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <p  className="text-justify">
                Energetska odvisnost ka??e, kako je gospodarstvo odvisno od uvoza za zadovoljevanje svojih potreb po energiji. Izra??una se kot neto uvoz, deljen z bruto razpolo??ljivo energijo. Dr??ave, ki ve?? izvozijo kot uvozijo energijo, imajo negativne vrednosti. Bruto razpolo??ljiva energija je izra??unana vrednost, definirana kot: primarna proizvodnja + predelani in reciklirani proizvodi + uvoz ??? izvoz + spremembe zalog.
              </p>
              <span>Proizvajalci elektri??ne energije, vklju??eni v podporno shemo so v prvi polovici leta 2022 proizvedli 460,67 GWh elektri??ne energije iz obnovljivih virov oziroma v soproizvodnji z visokim izkoristkom za katero jim je bila izpla??ana dr??avna pomo?? v okviru podporne sheme za elektri??no energijo, proizvedeno iz OVE in v SPTE.</span>
                  
            </Typography>
            <div className="flex object-center justify-center justify-items-center items-center ">
              <img src={ove} className="border-solid border-1 mt-6"/>
            </div>
          </Box>
        </Modal>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
              Obnovljivi viri energije
              <span className="text-lg block">Dele?? obnovljivih virov energije v bruto kon??ni porabi energije po sektorjih (vir: <a className="text-blue-700" href="https://ec.europa.eu/eurostat/databrowser/view/SDG_07_40/bookmark/table?lang=en&bookmarkId=9317d7f6-2cd0-4651-83fe-b749e9eec436">Eurostat</a>)</span>
              <span className="text-base text-zinc-500">Zadnja posodobitev podatkov: 19/04/2022 23:00 (pred 8 meseci)</span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              <p  className="text-justify">
                Kazalec meri dele?? porabe obnovljivih virov energije v bruto kon??ni porabi energije po Direktivi o obnovljivih virih energije. Bruto kon??na poraba energije je energija, ki jo porabijo kon??ni odjemalci (poraba kon??ne energije) plus izgube v omre??ju in lastna poraba elektrarn.
              </p>            
            </Typography>
            <Box sx={{ mt:5 }}>
              <LineChart primaryX={oveX} primaryY={LineOVEYAxis} data={lineOVESeries} />
            </Box>
          </Box>
        </Modal> 
      </div>

      <div className="grid">
        <div className="mt-12 ml-32 mr-32 border flex flex-nowrap justify-start justify-items-start items-center border-gray-300 rounded snap-center">
          <img src={images} 
          className="w-14 h-14" />
          <p className="mt-1 mr-3 ml-3 text-2xl text-[#00758f]">
            Slovenski Energetski Indeksi
          </p>
        </div>
        <div className="ml-32 p-1">
          <p className="text-[#EC6625] font-bold">??tevilke v oran??ni barvi: podatki za 2021</p>
          <p className="text-blue-600 font-bold">??tevilke v modri barvi: podatki za 2020</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-3">
          <div onClick={handleOpen3} className="cursor-pointer hover:font-bold hover:scale-110 shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-auto rounded-xl w-auto lg: p-8 pt-9 m-3 ml-6 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <p className=" text-[#00758f]">Pokritost porabe elektri??ne</p>
                <p className=" text-[#00758f]">energije z doma??o proizvodnjo:</p>
                <div class="parent">
                  <div class="divPrvi mt-3">
                    <p className="text-[#EC6625] text-xl">82,9 %</p> 
                    <p className="text-blue-600 text-xl">92,6 %</p>
                  </div>
                  <div class="divDrugi mt-5 "> 
                    <p className="font-mono text-2xl text-red-600">-10.3%</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div onClick={handleOpen4} className="cursor-pointer hover:font-bold hover:scale-110 shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg: p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center ">
              <div className="w-full">
                <p className="hover:text-bold text-[#00758f]">Skupna poraba elektri??ne </p>
                <p className=" text-[#00758f]">energije kon??nih odjemalcev:</p>
                <div class="parent">
                  <div class="divPrvi mt-3">
                    <p className="text-[#EC6625] text-xl">+3,1 %</p> 
                    <p className="text-blue-600 text-xl">-1,3 %</p>
                  </div>
                  <div class="divDrugi mt-5 "> 
                    <p className="font-mono text-2xl text-red-600">+4,4 %</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div onClick={handleOpen5} className="cursor-pointer hover:font-bold hover:scale-110 shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg: p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-center">
              <div className="grid justify-items-center mb-1 w-full" >
                <img src={bolt} />
                <div class="p-1 mt-1">
                  <p className="text-2xl text-bold text-[#EC6625]">36,7 %</p>
                </div> 
                <div class="">
                  <p className="text-xl text-[#00758f]">-ocenjen dele?? OVE </p>
                </div>
                <div class="">
                  <p className="text-xl text-bold text-blue-600">(35 %)</p>
                </div>
              </div>
            </div>
          </div>
          <p className="hidden">
            Cene zemljskega plina: https://www.energetika-portal.si/statistika/statisticna-podrocja/zemeljski-plin-cene/
            Novice zemlskega plina: https://www.energetika-portal.si/nc/novica/n/maloprodajne-cene-zemeljskega-plina-v-2-trimesecju-2022/
          </p>
          <div onClick={handleOpen6} className="cursor-pointer hover:font-bold hover:scale-110 shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg: p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className=" text-[#00758f]">Cena dobavljene el. e. za</p>
                <p className=" text-[#00758f]">gospodinjskega odjemalca:</p>
                <div class="parent">
                  <div class="divPrvi mt-3">
                    <p className="text-[#EC6625] text-xl">+7,4 %</p> 
                    <p className="text-blue-600 text-xl">-4,8 %</p>
                  </div>
                  <div class="divDrugi mt-5 "> 
                    <p className="font-mono text-2xl text-red-600">+12.2%</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div onClick={handleOpen7} className="cursor-pointer hover:font-bold hover:scale-110 shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl lg: p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div className="w-full">
                <p className=" text-[#00758f]">Cena dobavljene el. e. za</p>
                <p className=" text-[#00758f]">poslovnega odjemalca:</p>
                <div class="parent">
                  <div class="divPrvi mt-3">
                    <p className="text-[#EC6625] text-xl">+11,3 %</p> 
                    <p className="text-blue-600 text-xl">+5,3 %</p>
                  </div>
                  <div class="divDrugi mt-5 "> 
                    <p className="font-mono text-2xl text-red-600">+6 %</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          > 
            <Box sx={style} className="model-content">
              <Typography id="modal-modal-title" variant="h6" component="h6">Pokritost porabe z doma??o proizvodnjo
                
                <span className="text-lg block">PORABA, PROIZVODNJA IN POKRITOST PORABE Z DOMA??O PROIZVODNJO <span className="block"> V OBDOBJU 2017???2021 (vir: <a className="text-blue-700" href="https://www.agen-rs.si/documents/10926/38704/Poro%C4%8Dilo-o-stanju-na-podro%C4%8Dju-energetike-v-Sloveniji-v-letu-2021/17048023-cfc5-4283-8e48-5fa078ad2ae6">AGENCIJA, ELEKTROOPERATERJI</a>)</span></span>
                <span className="text-base text-zinc-500">Zadnja posodobitev podatkov: 21/01/2022 23:00 (pred 12 meseci)</span>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <p  className="text-justify">
                  V opazovanem obdobju 2017???2021 ugotavljamo
                  medletna nihanja pokritosti porabe z doma??o proizvodnjo. Nanjo neposredno vpliva tudi sprememba odjema elektri??ne energije. Dinamika in struktura skupne porabe sta podrobneje predstavljeni
                  v predhodnem poglavju. K skupni porabi elektri??ne energije se razen porabe kon??nih odjemalcev
                  na prenosnem in distribucijskem sistemu pri??tevajo tudi izgube na celotnem elektroenergetskem
                  sistemu. Koli??ine elektri??ne energije, ki so preko
                  distribucijskega sistema iz RTP Vrtojba in Se??ana
                  distribuirane v Italijo, se ne upo??tevajo kot kon??ni
                  odjem v Sloveniji.
                27  
                </p>            
              </Typography>
              <Box sx={{ mt:5 }}>
                <MultiplePanes />
              </Box>
              <Typography>
              <span className="block">
                  Kot je prikazano na grafikonu, je bila v opazovanem
                  obdobju pokritost z doma??o proizvodnjo najvi??ja v
                  letu 2020 (92,6 %). V letu 2021 je pokritost porabe
                  z doma??o proizvodnjo zna??ala 82,9 % in je bila na
                  pribli??no enaki ravni kot pred letom 2020.
                </span>
              </Typography>
            </Box>
            
          </Modal>
          <Modal
          open={open4}
          onClose={handleClose4}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          > 
            <Box sx={style} className="model-content">
              <Typography id="modal-modal-title" variant="h6" component="h6">
                Poraba Elektri??ne Energije 
                <span className="text-lg block">V Obdobju 2017-2021 (vir: <a className="text-blue-700" href="https://www.agen-rs.si/documents/10926/38704/Poro%C4%8Dilo-o-stanju-na-podro%C4%8Dju-energetike-v-Sloveniji-v-letu-2021/17048023-cfc5-4283-8e48-5fa078ad2ae6">AGENCIJA, ELEKTROOPERATERJI</a>)</span>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <p>
                  Na sliki 12 sta prikazani skupna in povpre??na letna
                  poraba elektri??na energije gospodinjskih odjemalcev z enotarifnim in dvotarifnim merjenjem, kjer za
                  izra??un povpre??ne letne porabe upo??tevamo tudi
                  ??tevilo gospodinjskih odjemalcev posameznega
                  tipa merjenja.
                <span className="block">
                  Pri gospodinjskih odjemalcih z dvotarifnim merjenjem sta v opazovanem petletnem obdobju razvidni stalna rast skupne in povpre??ne letne porabe
                  elektri??ne energije. Raste tudi ??tevilo gospodinjskih
                  odjemalcev z dvotarifnim merjenjem, v povpre??ju za
                  eno odstotno to??ko na leto
                </span>
                <span className="block">
                  Pri gospodinjskih odjemalcih z enotarifnim merjenjem je v letu 2021 zabele??ena najmanj??a poraba
                  elektri??ne energije v zadnjih petih letih. ??tevilo teh
                  gospodinjskih odjemalcev pa v povpre??ju pada za
                  0,6 odstotne to??ke na leto.
                </span>
                  24
                </p>           
              </Typography>
              <Box sx={{ mt:5 }}>
              <div id="modal">
                <StackedColumn id="modal" data={skupnaPoraba} x={skupnaX} y={skupnaY} currentMode={currentMode} width="100%" height="90%" />
              </div>
              </Box>
            </Box>
            
          </Modal>
          <Modal
          open={open5}
          onClose={handleClose5}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          > 
            <Box sx={style} className="model-content">
              <Typography id="modal-modal-title" variant="h6" component="h6">
                PREVZEM ELEKTRI??NE ENERGIJE IZ PROIZVODNIH ENOT V PRENOSNI IN DISTRIBUCIJSKI SISTEM
                <span className="text-lg block"> V Obdobju 2017???2021 (vir: <a className="text-blue-700" href="https://www.agen-rs.si/documents/10926/38704/Poro%C4%8Dilo-o-stanju-na-podro%C4%8Dju-energetike-v-Sloveniji-v-letu-2021/17048023-cfc5-4283-8e48-5fa078ad2ae6">AGENCIJA, ELEKTROOPERATERJI</a>)</span>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                Dele?? proizvedene elektri??ne energije v hidroelektrarnah in v elektrarnah na druge obnovljive vire se
                iz leta v leto spreminja glede na hidrolo??ke in druge razmere ter tudi glede na obseg vlaganj v izgradnjo proizvodnih enot za izrabo obnovljivih virov. V
                letu 2021 je dele?? obnovljivih virov zna??al 36,7 %
                vse proizvedene elektri??ne energije v Sloveniji, kar
                je 1,7 % ve?? kot leto prej. Elektrarne na fosilna goriva so k skupni proizvodnji prispevale 25,8 %, kar
                je 0,8 % manj kot v letu 2020, NEK pa 37,5 % vse
                proizvedene elektri??ne energije.  19        
              </Typography>
              <Box sx={{ mt:5 }}>
                <StackedArea100 />
              </Box>
            </Box>
            
          </Modal>
          <Modal
          open={open6}
          onClose={handleClose6}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          > 
            <Box sx={style} className="model-content">
              <Typography id="modal-modal-title" variant="h6" component="h6">
                Cene elektri??ne energije za gospodinjske odjemalce (EUR/kWh)
                <span className="text-lg block">STANDARDNA PORABNI??KA SKUPINA (LETNA PORABA) (vir: <a className="text-blue-700" href="https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817540S.px">SiStat</a>)</span>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                Porabni??ke skupine od DA do DE so definirane glede na interval letne porabe.
                https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817545S.PX    
              </Typography>
              <Box sx={{ mt:5 }} className="cenaGospod">
                <Line x={cenaDobX} y={cenaDobY} data={cenaDob} id={"cenaGospod"}/>
              </Box>
            </Box>
            
          </Modal>
          <Modal
          open={open7}
          onClose={handleClose7}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          > 
            <Box sx={style} className="model-content">
             <Typography id="modal-modal-title" variant="h6" component="h6">
                Cene elektri??ne energije za negospodinjske odjemalce (EUR/kWh)
                <span className="text-lg block">STANDARDNA PORABNI??KA SKUPINA (LETNA PORABA) (vir: <a className="text-blue-700" href="https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817545S.PX">SiStat</a>)</span>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                Porabni??ke skupine od IA do IF so definirane glede na interval letne porabe.
                https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817545S.PX  
              </Typography>
              <Box sx={{ mt:5 }} className="cenaNegospod">
                <Line x={cenaDobX} y={cenaDobY} data={cenaDob} id={"cenaNegospod"}/>
              </Box>
            </Box>
            
          </Modal>
        </div>
      </div>
      

      <div className="flex gap-9 w-full flex-wrap justify-center shadow-lg mb-3 pb-12">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1200  shadow-2xl shadow-blue-500/50 ">
          <div className="flex justify-center mt-2">
            <p className="font-semibold text-xl align-middle">Proizvodnja elektrike, Slovenija</p>
          </div>
          <p className="hidden">
            Proizvodnja elektrike: https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817604S.px/
          </p>
          <div className="w-full mt-7 flex gap-1 flex-wrap justify-center">
            <div id="charts" className="w-full min-w-full">
              <Stacked currentMode={currentMode} width="100%" height="90%" />
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mr-1">
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 saturate-150 bg-[#00758f]/80 shadow-xl shadow-[#77D6E8]"
            //{{ backgroundColor: currentColor }}
          >
            <div className="flex justify-center justify-items-center mt-2">
              <div className="">
                <img src={tacho} className=""/>
              </div>
            </div>
            <div className="grid mt-6">
              <ul class="list-disc text-xl text-white list-inside mt-2 text-justify">
                <li><span className="text-green-300 text-bold">43-odstotni</span> letni prirast skupnega ??tevila elektri??nih vozil;</li>
                <li className="mt-3">Kon??ne cene elektri??ne energije za gospodinjskega odjemalca <span className="text-green-300 text-bold"> ostajajo </span>pod povpre??jem EU;</li>
              </ul>      
            </div>
          </div>

          <div className="hover:font-bold bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 mt-6 shadow-xl hover:scale-110">
            <div className="flex justify-between items-center">
              <div>
                <p className=" text-[#00758f]">Uporabniki na distribucijskem sistemu</p>
                <p className=" text-[#00758f]">opremljenih z merilnimi napravami:</p>
                <div class="parent">
                  <div class="divPrvi mt-3">
                    <p className="text-[#EC6625] text-xl">88,1 %</p> 
                    <p className="text-blue-600 text-xl">74,5 %</p>
                  </div>
                  <div class="divDrugi mt-5 "> 
                    <p className="font-mono text-2xl text-red-600">+13,6%</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 ml-32 mr-32 border flex justify-start justify-items-start items-center border-gray-300 rounded snap-center">
        <img src={images} 
        className="w-14 h-14" />
        <p className="mt-1 mr-3 ml-3 text-2xl text-[#00758f]">
          Slovenski agregatni indikatorji za energente
        </p>
      </div>
      <div className="flex gap-10 w-full flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1200 shadow-2xl shadow-blue-500/50 mt-12 ">
          <div className="flex justify-center mt-3">
            <p className="font-semibold text-xl align-middle capitalize">Poro??ilo o stanju na podro??ju energetike v sloveniji 2021</p>
          </div>
          <p className="hidden">
            Energetska bilanca: https://pxweb.stat.si/SiStatData/pxweb/sl/Data/-/1817903S.px/
          </p>
          <div className="w-auto sm:w-auto mt-7 flex flex-wrap justify-center">
            <div id="chartsStacked" className="p-1 w-screen md:w-1/2 ">
              <StackedColumn title="Gibanje Proizvodnje Elektri??ne Energije Iz Velikih Elektrarn" id="chartsStacked" data={renderSwitch2(currentFruit)} x={renderX(currentFruit)} y={renderY(currentFruit)} currentMode={currentMode} width="100%" height="90%" />
            </div>
            <div className="p-1 w-auto md:w-1/2">
              <Pie title="Energetska bilanca %" id="chart-pie" data={renderSwitch(currentFruit)} legendVisiblity width="100%" height="90%" />
            </div>
          </div>
        </div>
         
        <div className="mt-12">
          <div
            className="shadow-xl shadow-[#77D6E8] rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
           >
            <div className="mt-6">     
              <label for="countries" className="font-semibold text-white text-2xl mb-8">Izberi leto</label>
              <form>
                <select 
                  className="border-color px-2 py-1 bg-gray-50 border border-gray-300 text-gray-900 mt-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => changeFruit(event.target.value)}
                  value={currentFruit}
                >
                  <option value="vsa">Vsa leta</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
              </form>
            </div>

            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Skupaj:</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">{skp}</p>
                <p className="text-gray-200">(1000 TJ)</p>
              </div>
            </div>
          </div>

          <div className="shadow-xl mt-12 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex flex-nowrap justify-left items-left gap-10">
            <div className="flex justify-between items-left">
              <div>
                <p className="font-bold text-[#00758f]">Prevzem iz tujine (uvoz): </p>
                <p id="div11" className="text-[#EC6625] text-xl">[{div11} GWh]</p> 
                <div class="">
                  <div class="divPrvi mt-3">
                    <p className="font-bold text-[#00758f]">Oddaja v tujino (izvoz):</p>     
                    <p id="div12" className="text-blue-600 text-xl">[{div12} GWh]</p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-10 m-4 flex-wrap justify-center">
        <div className="shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl" >
          <p className="font-bold text-xl" >
            {div21}
          </p>
          <p>
            {div22}
          </p>
          <p>
            {div23}
          </p>
          <p>
            {div24}
          </p>
        </div>
        <div className="hidden shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl" >
         <div>
            <p className="font-bold">Kon??na cena elektri??ne energije</p>
            <p className="font-bold">za zna??ilnega gospodinjskega odjemalca:</p>
            <div className="grid justify-items-center">
              <div className="p-1 mt-3">
                <p className="text-2xl">{div31} ???/MWh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid shadow-xl justify-items-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl" >
          <p className="font-bold text-xl" >
            {div41} %
          </p>
          <p className="">
            ??? ocenjen dele?? OVE
          </p>
        </div>
        <div className="shadow-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl" >
          <p className="text-xl mt-2" >
            {div51}
          </p>
          <p className="text-xl">
            {div52}
          </p>
          <p className="text-xl">
            {div53}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;