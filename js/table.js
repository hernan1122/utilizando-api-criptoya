// table bitcoin
async function consultaCriptoBitcoin() {
  const res = await fetch('https://criptoya.com/api/btc/ars/0.1')
  const data = await res.json();
  console.log('bitcoin');
  console.log(data);

  const argenCompraBi = document.getElementById('argen-compra-bi');
  const argenVentaBi = document.getElementById('argen-venta-bi');
  const bitmoCompraBi = document.getElementById('bitmo-compra-bi');
  const bitmoVentaBi = document.getElementById('bitmo-venta-bi');
  const ripioCompraBi = document.getElementById('ripio-compra-bi');
  const ripioVentaBi = document.getElementById('ripio-venta-bi');
  const budaCompraBi = document.getElementById('buda-compra-bi');
  const budaVentaBi = document.getElementById('buda-venta-bi');
  const deCompraBi = document.getElementById('de-compra-bi');
  const deVentaBi = document.getElementById('de-venta-bi');
  const copterCompraBi = document.getElementById('copter-compra-bi');
  const copterVentaBi = document.getElementById('copter-venta-bi');
  const saldoCompraBi = document.getElementById('saldo-compra-bi');
  const saldoVentaBi = document.getElementById('saldo-venta-bi');
  const ftxCompraBi = document.getElementById('ftx-compra-bi');
  const ftxVentaBi = document.getElementById('ftx-venta-bi');
  const beloCompraBi = document.getElementById('belo-compra-bi');
  const beloVentaBi = document.getElementById('belo-venta-bi');
  const calypsoCompraBi = document.getElementById('calypso-compra-bi');
  const calypsoVentaBi = document.getElementById('calypso-venta-bi');
  const fiwindCompraBi = document.getElementById('fiwind-compra-bi');
  const fiwindVentaBi = document.getElementById('fiwind-venta-bi');
  const bitexCompraBi = document.getElementById('bitex-compra-bi');
  const bitexVentaBi = document.getElementById('bitex-venta-bi');
  const latamexCompraBi = document.getElementById('latamex-compra-bi');
  const latamexVentaBi = document.getElementById('latamex-venta-bi');
  const bitsoCompraBi = document.getElementById('bitso-compra-bi');
  const bitsoVentaBi = document.getElementById('bitso-venta-bi');
  const letsbitCompraBi = document.getElementById('letsbit-compra-bi');
  const letsbitVentaBi = document.getElementById('letsbit-venta-bi');

  argenCompraBi.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaBi.innerHTML = `$` + data.argenbtc.totalBid;
  bitmoCompraBi.innerHTML = `$` + data.bitmonedero.totalAsk;
  bitmoVentaBi.innerHTML = `$` + data.bitmonedero.totalBid;
  ripioCompraBi.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaBi.innerHTML = `$` + data.ripio.totalBid;
  budaCompraBi.innerHTML = `$` + data.buda.totalAsk;
  budaVentaBi.innerHTML = `$` + data.buda.totalBid;
  deCompraBi.innerHTML = `$` + data.decrypto.totalAsk;
  deVentaBi.innerHTML = `$` + data.decrypto.totalBid;
  copterCompraBi.innerHTML = `$` + data.copter.totalAsk;
  copterVentaBi.innerHTML = `$` + data.copter.totalBid;
  saldoCompraBi.innerHTML = `$` + data.saldo.totalAsk;
  saldoVentaBi.innerHTML = `$` + data.saldo.totalBid;
  ftxCompraBi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBi.innerHTML = `$` + data.ftx.totalBid;
  beloCompraBi.innerHTML = `$` + data.belo.totalAsk;
  beloVentaBi.innerHTML = `$` + data.belo.totalBid;
  calypsoCompraBi.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaBi.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompraBi.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBi.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompraBi.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaBi.innerHTML = `$` + data.bitex.totalBid;
  latamexCompraBi.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaBi.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraBi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaBi.innerHTML = `$` + data.bitso.totalBid;
  letsbitCompraBi.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaBi.innerHTML = `$` + data.letsbit.totalBid;
}

// table ethereum
async function consultaCriptoEthereum() {
  const res = await fetch('https://criptoya.com/api/eth/ars/0.1');
  const data = await res.json();
  console.log('ethereum');
  console.log(data);

  const argenCompraEt = document.getElementById('argen-compra-et');
  const argenVentaEt = document.getElementById('argen-venta-et');
  const buenCompraEt = document.getElementById('buen-compra-et');
  const buenVentaEt = document.getElementById('buen-venta-et');
  const ripioCompraEt = document.getElementById('ripio-compra-et');
  const ripioVentaEt = document.getElementById('ripio-venta-et');
  const budaCompraEt = document.getElementById('buda-compra-et');
  const budaVentaEt = document.getElementById('buda-venta-et');
  const lemonCompraEt = document.getElementById('lemon-compra-et');
  const lemonVentaEt = document.getElementById('lemon-venta-et');
  const copterCompraEt = document.getElementById('copter-compra-et');
  const copterVentaEt = document.getElementById('copter-venta-et');
  const tiendaCompraEt = document.getElementById('tienda-compra-et');
  const tiendaVentaEt = document.getElementById('tienda-venta-et');
  const ftxCompraEt = document.getElementById('ftx-compra-et');
  const ftxVentaEt = document.getElementById('ftx-venta-et');
  const beloCompraEt = document.getElementById('belo-compra-et');
  const beloVentaEt = document.getElementById('belo-venta-et');
  const calypsoCompraEt = document.getElementById('calypso-compra-et');
  const calypsoVentaEt = document.getElementById('calypso-venta-et');
  const fiwindCompraEt = document.getElementById('fiwind-compra-et');
  const fiwindVentaEt = document.getElementById('fiwind-venta-et');
  const bitexCompraEt = document.getElementById('bitex-compra-et');
  const bitexVentaEt = document.getElementById('bitex-venta-et');
  const latamexCompraEt = document.getElementById('latamex-compra-et');
  const latamexVentaEt = document.getElementById('latamex-venta-et');
  const bitsoCompraEt = document.getElementById('bitso-compra-et');
  const bitsoVentaEt = document.getElementById('bitso-venta-et');
  const letsbitCompraEt = document.getElementById('letsbit-compra-et');
  const letsbitVentaEt = document.getElementById('letsbit-venta-et');

  argenCompraEt.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaEt.innerHTML = `$` + data.argenbtc.totalBid;
  buenCompraEt.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaEt.innerHTML = `$` + data.buenbit.totalBid;
  ripioCompraEt.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaEt.innerHTML = `$` + data.ripio.totalBid;
  budaCompraEt.innerHTML = `$` + data.buda.totalAsk;
  budaVentaEt.innerHTML = `$` + data.buda.totalBid;
  lemonCompraEt.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaEt.innerHTML = `$` + data.lemoncash.totalBid;
  copterCompraEt.innerHTML = `$` + data.copter.totalAsk;
  copterVentaEt.innerHTML = `$` + data.copter.totalBid;
  tiendaCompraEt.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaEt.innerHTML = `$` + data.tiendacrypto.totalBid;
  ftxCompraEt.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaEt.innerHTML = `$` + data.ftx.totalBid;
  beloCompraEt.innerHTML = `$` + data.belo.totalAsk;
  beloVentaEt.innerHTML = `$` + data.belo.totalBid;
  calypsoCompraEt.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaEt.innerHTML = `$` + data.calypso.totalBid;
  fiwindCompraEt.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaEt.innerHTML = `$` + data.fiwind.totalBid;
  bitexCompraEt.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaEt.innerHTML = `$` + data.bitex.totalBid;
  latamexCompraEt.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaEt.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraEt.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaEt.innerHTML = `$` + data.bitso.totalBid;
  letsbitCompraEt.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaEt.innerHTML = `$` + data.letsbit.totalBid;
}

// table cardano
async function consultaCriptoCardano() {
  const res = await fetch('https://criptoya.com/api/ada/ars/0.1');
  const data = await res.json();
  console.log('cardano');
  console.log(data);

  const bitsoCompraCa = document.getElementById('bitso-compra-ca');
  const bitsoVentaCa = document.getElementById('bitso-venta-ca');
  const satoshiCompraCa = document.getElementById('satoshi-compra-ca');
  const satoshiVentaCa = document.getElementById('satoshi-venta-ca');
  const ripioCompraCa = document.getElementById('ripio-compra-ca');
  const ripioVentaCa = document.getElementById('ripio-venta-ca');
  const buenCompraCa = document.getElementById('buen-compra-ca');
  const buenVentaCa = document.getElementById('buen-venta-ca');
  const mktCompraCa = document.getElementById('mkt-compra-ca');
  const mktVentaCa = document.getElementById('mkt-venta-ca');
  const fiwindCompraCa = document.getElementById('fiwind-compra-ca');
  const fiwindVentaCa = document.getElementById('fiwind-venta-ca');
  const lemonCompraCa = document.getElementById('lemon-compra-ca');
  const lemonVentaCa = document.getElementById('lemon-venta-ca');
  const letsbitCompraCa = document.getElementById('letsbit-compra-ca');
  const letsbitVentaCa = document.getElementById('letsbit-venta-ca');

  bitsoCompraCa.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaCa.innerHTML = `$` + data.bitso.totalBid;
  satoshiCompraCa.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaCa.innerHTML = `$` + data.satoshitango.totalBid;
  ripioCompraCa.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaCa.innerHTML = `$` + data.ripio.totalBid;
  buenCompraCa.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaCa.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraCa.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaCa.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraCa.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaCa.innerHTML = `$` + data.fiwind.totalBid;
  lemonCompraCa.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaCa.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraCa.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaCa.innerHTML = `$` + data.letsbit.totalBid;
}

// table bnb
async function consultaCriptoBnb() {
  const res = await fetch('https://criptoya.com/api/bnb/ars/0.1');
  const data = await res.json();
  console.log('bnb');
  console.log(data);

  const fiwindCompraBnb = document.getElementById('fiwind-compra-bnb');
  const fiwindVentaBnb = document.getElementById('fiwind-venta-bnb');
  const buenCompraBnb = document.getElementById('buen-compra-bnb');
  const buenVentaBnb = document.getElementById('buen-venta-bnb');
  const calipsoCompraBnb = document.getElementById('calipso-compra-bnb');
  const calipsoVentaBnb = document.getElementById('calipso-venta-bnb');
  const lemonCompraBnb = document.getElementById('lemon-compra-bnb');
  const lemonVentaBnb = document.getElementById('lemon-venta-bnb');
  const ftxCompraBnb = document.getElementById('ftx-compra-bnb');
  const ftxVentaBnb = document.getElementById('ftx-venta-bnb');
  const mktCompraBnb = document.getElementById('mkt-compra-bnb');
  const mktVentaBnb = document.getElementById('mkt-venta-bnb');
  const tiendaCompraBnb = document.getElementById('tienda-compra-bnb');
  const tiendaVentaBnb = document.getElementById('tienda-venta-bnb');

  fiwindCompraBnb.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBnb.innerHTML = `$` + data.fiwind.totalBid;
  buenCompraBnb.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaBnb.innerHTML = `$` + data.buenbit.totalBid;
  calipsoCompraBnb.innerHTML = `$` + data.calypso.totalAsk;
  calipsoVentaBnb.innerHTML = `$` + data.calypso.totalBid;
  lemonCompraBnb.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaBnb.innerHTML = `$` + data.lemoncash.totalBid;
  ftxCompraBnb.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBnb.innerHTML = `$` + data.ftx.totalBid;
  mktCompraBnb.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaBnb.innerHTML = `$` + data.cryptomkt.totalBid;
  tiendaCompraBnb.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaBnb.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table solana
async function consultaCriptoSolana() {
  const res = await fetch('https://criptoya.com/api/sol/ars/0.1');
  const data = await res.json();
  console.log('solana');
  console.log(data);

  const ripioCompraSo = document.getElementById('ripio-compra-so');
  const ripioVentaSo = document.getElementById('ripio-venta-so');
  const letsbitCompraSo = document.getElementById('letsbit-compra-so');
  const letsbitVentaSo = document.getElementById('letsbit-venta-so');
  const ftxCompraSo = document.getElementById('ftx-compra-so');
  const ftxVentaSo = document.getElementById('ftx-venta-so');
  const bitsoCompraSo = document.getElementById('bitso-compra-so');
  const bitsoVentaSo = document.getElementById('bitso-venta-so');
  const satoshiCompraSo = document.getElementById('satoshi-compra-so');
  const satoshiVentaSo = document.getElementById('satoshi-venta-so');
  const lemonCompraSo = document.getElementById('lemon-compra-so');
  const lemonVentaSo = document.getElementById('lemon-venta-so');
  const tiendaCompraSo = document.getElementById('tienda-compra-so');
  const tiendaVentaSo = document.getElementById('tienda-venta-so');
  const buenbitCompraSo = document.getElementById('buenbit-compra-so');
  const buenbitVentaSo = document.getElementById('buenbit-venta-so');
  const mktCompraSo = document.getElementById('mkt-compra-so');
  const mktVentaSo = document.getElementById('mkt-venta-so');
  const fiwindCompraSo = document.getElementById('fiwind-compra-so');
  const fiwindVentaSo = document.getElementById('fiwind-venta-so');

  ripioCompraSo.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaSo.innerHTML = `$` + data.ripio.totalBid;
  letsbitCompraSo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaSo.innerHTML = `$` + data.letsbit.totalBid;
  ftxCompraSo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaSo.innerHTML = `$` + data.ftx.totalBid;
  bitsoCompraSo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaSo.innerHTML = `$` + data.bitso.totalBid;
  satoshiCompraSo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaSo.innerHTML = `$` + data.satoshitango.totalBid;
  lemonCompraSo.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaSo.innerHTML = `$` + data.lemoncash.totalBid;
  tiendaCompraSo.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaSo.innerHTML = `$` + data.tiendacrypto.totalBid;
  buenbitCompraSo.innerHTML = `$` + data.buenbit.totalAsk;
  buenbitVentaSo.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraSo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaSo.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraSo.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaSo.innerHTML = `$` + data.fiwind.totalBid;
}

// table polkadot
async function consultaCriptoPolkadot() {
  const res = await fetch('https://criptoya.com/api/dot/ars/0.1');
  const data = await res.json();
  console.log('polkadot');
  console.log(data);

  const bitsoCompraPo = document.getElementById('bitso-compra-po');
  const bitsoVentaPo = document.getElementById('bitso-venta-po');
  const satoshiCompraPo = document.getElementById('satoshi-compra-po');
  const satoshiVentaPo = document.getElementById('satoshi-venta-po');
  const ripioCompraPo = document.getElementById('ripio-compra-po');
  const ripioVentaPo = document.getElementById('ripio-venta-po');
  const buenCompraPo = document.getElementById('buen-compra-po');
  const buenVentaPo = document.getElementById('buen-venta-po');
  const mktCompraPo = document.getElementById('mkt-compra-po');
  const mktVentaPo = document.getElementById('mkt-venta-po');
  const letsbitCompraPo = document.getElementById('letsbit-compra-po');
  const letsbitVentaPo = document.getElementById('letsbit-venta-po');
  const fiwindCompraPo = document.getElementById('fiwind-compra-po');
  const fiwindVentaPo = document.getElementById('fiwind-venta-po');
  const lemonCompraPo = document.getElementById('lemon-compra-po');
  const lemonVentaPo = document.getElementById('lemon-venta-po');
  const ftxCompraPo = document.getElementById('ftx-compra-po');
  const ftxVentaPo = document.getElementById('ftx-venta-po');

  bitsoCompraPo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaPo.innerHTML = `$` + data.bitso.totalBid;
  satoshiCompraPo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaPo.innerHTML = `$` + data.satoshitango.totalBid;
  ripioCompraPo.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaPo.innerHTML = `$` + data.ripio.totalBid;
  buenCompraPo.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaPo.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraPo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaPo.innerHTML = `$` + data.cryptomkt.totalBid;
  letsbitCompraPo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaPo.innerHTML = `$` + data.letsbit.totalBid;
  fiwindCompraPo.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaPo.innerHTML = `$` + data.fiwind.totalBid;
  lemonCompraPo.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaPo.innerHTML = `$` + data.lemoncash.totalBid;
  ftxCompraPo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaPo.innerHTML = `$` + data.ftx.totalBid;
}

// table litecoin
async function consultaCriptoLitecoin() {
  const res = await fetch('https://criptoya.com/api/ltc/ars/0.1');
  const data = await res.json();
   console.log('litecoin');
  console.log(data);

  const budaCompraLi = document.getElementById('buda-compra-li');
  const budaVentaLi = document.getElementById('buda-venta-li');
  const ftxCompraLi = document.getElementById('ftx-compra-li');
  const ftxVentaLi = document.getElementById('ftx-venta-li');
  const latamexCompraLi = document.getElementById('latamex-compra-li');
  const latamexVentaLi = document.getElementById('latamex-venta-li');
  const bitsoCompraLi = document.getElementById('bitso-compra-li');
  const bitsoVentaLi = document.getElementById('bitso-venta-li');
  const mktCompraLi = document.getElementById('mkt-compra-li');
  const mktVentaLi = document.getElementById('mkt-venta-li');
  const letsbitCompraLi = document.getElementById('letsbit-compra-li');
  const letsbitVentaLi = document.getElementById('letsbit-venta-li');
  const ripioCompraLi = document.getElementById('ripio-compra-li');
  const ripioVentaLi = document.getElementById('ripio-venta-li');
  const satoshiCompraLi = document.getElementById('satoshi-compra-li');
  const satoshiVentaLi = document.getElementById('satoshi-venta-li');

  budaCompraLi.innerHTML = `$` + data.buda.totalAsk;
  budaVentaLi.innerHTML = `$` + data.buda.totalBid;
  ftxCompraLi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaLi.innerHTML = `$` + data.ftx.totalBid;
  latamexCompraLi.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaLi.innerHTML = `$` + data.latamex.totalBid;
  bitsoCompraLi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaLi.innerHTML = `$` + data.bitso.totalBid;
  mktCompraLi.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaLi.innerHTML = `$` + data.cryptomkt.totalBid;
  letsbitCompraLi.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaLi.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraLi.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaLi.innerHTML = `$` + data.ripio.totalBid;
  satoshiCompraLi.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaLi.innerHTML = `$` + data.satoshitango.totalBid;
}

// table avalanche
async function consultaCriptoAvalanche() {
  const res = await fetch('https://criptoya.com/api/avax/ars/0.1');
  const data = await res.json();
  console.log('avalanche');
  console.log(data);

  const letsbitCompraAv = document.getElementById('letsbit-compra-av');
  const letsbitVentaAv = document.getElementById('letsbit-venta-av');
  const ripioCompraAv = document.getElementById('ripio-compra-av');
  const ripioVentaAv = document.getElementById('ripio-venta-av');
  const lemonCompraAv = document.getElementById('lemon-compra-av');
  const lemonVentaAv = document.getElementById('lemon-venta-av');
  const satoshiCompraAv = document.getElementById('satoshi-compra-av');
  const satoshiVentaAv = document.getElementById('satoshi-venta-av');
  const ftxCompraAv = document.getElementById('ftx-compra-av');
  const ftxVentaAv = document.getElementById('ftx-venta-av');
  const buenCompraAv = document.getElementById('buen-compra-av');
  const buenVentaAv = document.getElementById('buen-venta-av');
  const mktCompraAv = document.getElementById('mkt-compra-av');
  const mktVentaAv = document.getElementById('mkt-venta-av');

  letsbitCompraAv.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaAv.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraAv.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaAv.innerHTML = `$` + data.ripio.totalBid;
  lemonCompraAv.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaAv.innerHTML = `$` + data.lemoncash.totalBid;
  satoshiCompraAv.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaAv.innerHTML = `$` + data.satoshitango.totalBid;
  ftxCompraAv.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaAv.innerHTML = `$` + data.ftx.totalBid;
  buenCompraAv.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaAv.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraAv.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaAv.innerHTML = `$` + data.cryptomkt.totalBid;
}

consultaCriptoBitcoin();
consultaCriptoEthereum();
consultaCriptoCardano();
consultaCriptoBnb();
consultaCriptoSolana();
consultaCriptoPolkadot();
consultaCriptoLitecoin();
consultaCriptoAvalanche();