// table bitcoin
async function consultaCriptoBitcoin() {
  const res = await fetch('https://criptoya.com/api/btc/ars/0.1')
  const data = await res.json();
  console.log('bitcoin');
  console.log(data);

  const argenCompraBi = document.getElementById('argen-compra-bi');
  const argenVentaBi = document.getElementById('argen-venta-bi');
  const beloCompraBi = document.getElementById('belo-compra-bi');
  const beloVentaBi = document.getElementById('belo-venta-bi');
  const bitexCompraBi = document.getElementById('bitex-compra-bi');
  const bitexVentaBi = document.getElementById('bitex-venta-bi');
  const bitmoCompraBi = document.getElementById('bitmo-compra-bi');
  const bitmoVentaBi = document.getElementById('bitmo-venta-bi');
  const bitsoCompraBi = document.getElementById('bitso-compra-bi');
  const bitsoVentaBi = document.getElementById('bitso-venta-bi');
  const budaCompraBi = document.getElementById('buda-compra-bi');
  const budaVentaBi = document.getElementById('buda-venta-bi');
  const buenbitCompraBi = document.getElementById('buenbit-compra-bi');
  const buenbitVentaBi = document.getElementById('buenbit-venta-bi');
  const calypsoCompraBi = document.getElementById('calypso-compra-bi');
  const calypsoVentaBi = document.getElementById('calypso-venta-bi');
  const copterCompraBi = document.getElementById('copter-compra-bi');
  const copterVentaBi = document.getElementById('copter-venta-bi');
  const mktCompraBi = document.getElementById('mkt-compra-bi');
  const mktVentaBi = document.getElementById('mkt-venta-bi');
  const deCompraBi = document.getElementById('de-compra-bi');
  const deVentaBi = document.getElementById('de-venta-bi');
  const fiwindCompraBi = document.getElementById('fiwind-compra-bi');
  const fiwindVentaBi = document.getElementById('fiwind-venta-bi');
  const ftxCompraBi = document.getElementById('ftx-compra-bi');
  const ftxVentaBi = document.getElementById('ftx-venta-bi');
  const kriptonCompraBi = document.getElementById('kripton-compra-bi');
  const kriptonVentaBi = document.getElementById('kripton-venta-bi');
  const latamexCompraBi = document.getElementById('latamex-compra-bi');
  const latamexVentaBi = document.getElementById('latamex-venta-bi');
  const lemonCompraBi = document.getElementById('lemon-compra-bi');
  const lemonVentaBi = document.getElementById('lemon-venta-bi');
  const letsbitCompraBi = document.getElementById('letsbit-compra-bi');
  const letsbitVentaBi = document.getElementById('letsbit-venta-bi');
  const ripioCompraBi = document.getElementById('ripio-compra-bi');
  const ripioVentaBi = document.getElementById('ripio-venta-bi');
  const ripioexCompraBi = document.getElementById('ripioex-compra-bi');
  const ripioexVentaBi = document.getElementById('ripioex-venta-bi');
  const saldoCompraBi = document.getElementById('saldo-compra-bi');
  const saldoVentaBi = document.getElementById('saldo-venta-bi');
  const satoshiCompraBi = document.getElementById('satoshi-compra-bi');
  const satoshiVentaBi = document.getElementById('satoshi-venta-bi');
  const tiendaCompraBi = document.getElementById('tienda-compra-bi');
  const tiendaVentaBi = document.getElementById('tienda-venta-bi');

  argenCompraBi.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaBi.innerHTML = `$` + data.argenbtc.totalBid;
  beloCompraBi.innerHTML = `$` + data.belo.totalAsk;
  beloVentaBi.innerHTML = `$` + data.belo.totalBid;
  bitexCompraBi.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaBi.innerHTML = `$` + data.bitex.totalBid;
  bitmoCompraBi.innerHTML = `$` + data.bitmonedero.totalAsk;
  bitmoVentaBi.innerHTML = `$` + data.bitmonedero.totalBid;
  bitsoCompraBi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaBi.innerHTML = `$` + data.bitso.totalBid;
  budaCompraBi.innerHTML = `$` + data.buda.totalAsk;
  budaVentaBi.innerHTML = `$` + data.buda.totalBid;
  buenbitCompraBi.innerHTML = `$` + data.buenbit.totalAsk;
  buenbitVentaBi.innerHTML = `$` + data.buenbit.totalBid;
  calypsoCompraBi.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaBi.innerHTML = `$` + data.calypso.totalBid;
  copterCompraBi.innerHTML = `$` + data.copter.totalAsk;
  copterVentaBi.innerHTML = `$` + data.copter.totalBid;
  mktCompraBi.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaBi.innerHTML = `$` + data.cryptomkt.totalBid;
  deCompraBi.innerHTML = `$` + data.decrypto.totalAsk;
  deVentaBi.innerHTML = `$` + data.decrypto.totalBid;
  fiwindCompraBi.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBi.innerHTML = `$` + data.fiwind.totalBid;
  ftxCompraBi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBi.innerHTML = `$` + data.ftx.totalBid;
  kriptonCompraBi.innerHTML = `$` + data.kriptonmarket.totalAsk;
  kriptonVentaBi.innerHTML = `$` + data.kriptonmarket.totalBid;
  latamexCompraBi.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaBi.innerHTML = `$` + data.latamex.totalBid;
  lemonCompraBi.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaBi.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraBi.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaBi.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraBi.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaBi.innerHTML = `$` + data.ripio.totalBid;
  ripioexCompraBi.innerHTML = `$` + data.ripioexchange.totalAsk;
  ripioexVentaBi.innerHTML = `$` + data.ripioexchange.totalBid;
  saldoCompraBi.innerHTML = `$` + data.saldo.totalAsk;
  saldoVentaBi.innerHTML = `$` + data.saldo.totalBid;
  satoshiCompraBi.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaBi.innerHTML = `$` + data.satoshitango.totalBid;
  tiendaCompraBi.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaBi.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table ethereum
async function consultaCriptoEthereum() {
  const res = await fetch('https://criptoya.com/api/eth/ars/0.1');
  const data = await res.json();
  console.log('ethereum');
  console.log(data);

  const argenCompraEt = document.getElementById('argen-compra-et');
  const argenVentaEt = document.getElementById('argen-venta-et');
  const beloCompraEt = document.getElementById('belo-compra-et');
  const beloVentaEt = document.getElementById('belo-venta-et');
  const bitexCompraEt = document.getElementById('bitex-compra-et');
  const bitexVentaEt = document.getElementById('bitex-venta-et');
  const bitsoCompraEt = document.getElementById('bitso-compra-et');
  const bitsoVentaEt = document.getElementById('bitso-venta-et');
  const budaCompraEt = document.getElementById('buda-compra-et');
  const budaVentaEt = document.getElementById('buda-venta-et');
  const buenCompraEt = document.getElementById('buen-compra-et');
  const buenVentaEt = document.getElementById('buen-venta-et');
  const calypsoCompraEt = document.getElementById('calypso-compra-et');
  const calypsoVentaEt = document.getElementById('calypso-venta-et');
  const copterCompraEt = document.getElementById('copter-compra-et');
  const copterVentaEt = document.getElementById('copter-venta-et');
  const mktCompraEt = document.getElementById('mkt-compra-et');
  const mktVentaEt = document.getElementById('mkt-venta-et');
  const fiwindCompraEt = document.getElementById('fiwind-compra-et');
  const fiwindVentaEt = document.getElementById('fiwind-venta-et');
  const ftxCompraEt = document.getElementById('ftx-compra-et');
  const ftxVentaEt = document.getElementById('ftx-venta-et');
  const kriptonCompraEt = document.getElementById('kripton-compra-et');
  const kriptonVentaEt = document.getElementById('kripton-venta-et');
  const latamexCompraEt = document.getElementById('latamex-compra-et');
  const latamexVentaEt = document.getElementById('latamex-venta-et');
  const lemonCompraEt = document.getElementById('lemon-compra-et');
  const lemonVentaEt = document.getElementById('lemon-venta-et');
  const letsbitCompraEt = document.getElementById('letsbit-compra-et');
  const letsbitVentaEt = document.getElementById('letsbit-venta-et');
  const ripioCompraEt = document.getElementById('ripio-compra-et');
  const ripioVentaEt = document.getElementById('ripio-venta-et');
  const ripioexCompraEt = document.getElementById('ripioex-compra-et');
  const ripioexVentaEt = document.getElementById('ripioex-venta-et');
  const satoshiCompraEt = document.getElementById('satoshi-compra-et');
  const satoshiVentaEt = document.getElementById('satoshi-venta-et');
  const tiendaCompraEt = document.getElementById('tienda-compra-et');
  const tiendaVentaEt = document.getElementById('tienda-venta-et');

  argenCompraEt.innerHTML = `$` + data.argenbtc.totalAsk;
  argenVentaEt.innerHTML = `$` + data.argenbtc.totalBid;
  beloCompraEt.innerHTML = `$` + data.belo.totalAsk;
  beloVentaEt.innerHTML = `$` + data.belo.totalBid;
  bitexCompraEt.innerHTML = `$` + data.bitex.totalAsk;
  bitexVentaEt.innerHTML = `$` + data.bitex.totalBid;
  bitsoCompraEt.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaEt.innerHTML = `$` + data.bitso.totalBid;
  budaCompraEt.innerHTML = `$` + data.buda.totalAsk;
  budaVentaEt.innerHTML = `$` + data.buda.totalBid;
  buenCompraEt.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaEt.innerHTML = `$` + data.buenbit.totalBid;
  calypsoCompraEt.innerHTML = `$` + data.calypso.totalAsk;
  calypsoVentaEt.innerHTML = `$` + data.calypso.totalBid;
  copterCompraEt.innerHTML = `$` + data.copter.totalAsk;
  copterVentaEt.innerHTML = `$` + data.copter.totalBid;
  mktCompraEt.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaEt.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraEt.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaEt.innerHTML = `$` + data.fiwind.totalBid;
  ftxCompraEt.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaEt.innerHTML = `$` + data.ftx.totalBid;
  kriptonCompraEt.innerHTML = `$` + data.kriptonmarket.totalAsk;
  kriptonVentaEt.innerHTML = `$` + data.kriptonmarket.totalBid;
  latamexCompraEt.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaEt.innerHTML = `$` + data.latamex.totalBid;
  lemonCompraEt.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaEt.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraEt.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaEt.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraEt.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaEt.innerHTML = `$` + data.ripio.totalBid;
  ripioexCompraEt.innerHTML = `$` + data.ripioexchange.totalAsk;
  ripioexVentaEt.innerHTML = `$` + data.ripioexchange.totalBid;
  satoshiCompraEt.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaEt.innerHTML = `$` + data.satoshitango.totalBid;
  tiendaCompraEt.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaEt.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table cardano
async function consultaCriptoCardano() {
  const res = await fetch('https://criptoya.com/api/ada/ars/0.1');
  const data = await res.json();
  console.log('cardano');
  console.log(data);

  const bitsoCompraCa = document.getElementById('bitso-compra-ca');
  const bitsoVentaCa = document.getElementById('bitso-venta-ca');
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
  const ripioCompraCa = document.getElementById('ripio-compra-ca');
  const ripioVentaCa = document.getElementById('ripio-venta-ca');
  const satoshiCompraCa = document.getElementById('satoshi-compra-ca');
  const satoshiVentaCa = document.getElementById('satoshi-venta-ca');

  bitsoCompraCa.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaCa.innerHTML = `$` + data.bitso.totalBid;
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
  ripioCompraCa.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaCa.innerHTML = `$` + data.ripio.totalBid;
  satoshiCompraCa.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaCa.innerHTML = `$` + data.satoshitango.totalBid;
}

// table bnb
async function consultaCriptoBnb() {
  const res = await fetch('https://criptoya.com/api/bnb/ars/0.1');
  const data = await res.json();
  console.log('bnb');
  console.log(data);

  const buenCompraBnb = document.getElementById('buen-compra-bnb');
  const buenVentaBnb = document.getElementById('buen-venta-bnb');
  const calipsoCompraBnb = document.getElementById('calipso-compra-bnb');
  const calipsoVentaBnb = document.getElementById('calipso-venta-bnb');
  const mktCompraBnb = document.getElementById('mkt-compra-bnb');
  const mktVentaBnb = document.getElementById('mkt-venta-bnb');
  const fiwindCompraBnb = document.getElementById('fiwind-compra-bnb');
  const fiwindVentaBnb = document.getElementById('fiwind-venta-bnb');
  const ftxCompraBnb = document.getElementById('ftx-compra-bnb');
  const ftxVentaBnb = document.getElementById('ftx-venta-bnb');
  const lemonCompraBnb = document.getElementById('lemon-compra-bnb');
  const lemonVentaBnb = document.getElementById('lemon-venta-bnb');
  const tiendaCompraBnb = document.getElementById('tienda-compra-bnb');
  const tiendaVentaBnb = document.getElementById('tienda-venta-bnb');

  buenCompraBnb.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaBnb.innerHTML = `$` + data.buenbit.totalBid;
  calipsoCompraBnb.innerHTML = `$` + data.calypso.totalAsk;
  calipsoVentaBnb.innerHTML = `$` + data.calypso.totalBid;
  mktCompraBnb.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaBnb.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraBnb.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaBnb.innerHTML = `$` + data.fiwind.totalBid;
  ftxCompraBnb.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaBnb.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraBnb.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaBnb.innerHTML = `$` + data.lemoncash.totalBid;
  tiendaCompraBnb.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaBnb.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table solana
async function consultaCriptoSolana() {
  const res = await fetch('https://criptoya.com/api/sol/ars/0.1');
  const data = await res.json();
  console.log('solana');
  console.log(data);

  const bitsoCompraSo = document.getElementById('bitso-compra-so');
  const bitsoVentaSo = document.getElementById('bitso-venta-so');
  const buenbitCompraSo = document.getElementById('buenbit-compra-so');
  const buenbitVentaSo = document.getElementById('buenbit-venta-so');
  const mktCompraSo = document.getElementById('mkt-compra-so');
  const mktVentaSo = document.getElementById('mkt-venta-so');
  const fiwindCompraSo = document.getElementById('fiwind-compra-so');
  const fiwindVentaSo = document.getElementById('fiwind-venta-so');
  const ftxCompraSo = document.getElementById('ftx-compra-so');
  const ftxVentaSo = document.getElementById('ftx-venta-so');
  const lemonCompraSo = document.getElementById('lemon-compra-so');
  const lemonVentaSo = document.getElementById('lemon-venta-so');
  const letsbitCompraSo = document.getElementById('letsbit-compra-so');
  const letsbitVentaSo = document.getElementById('letsbit-venta-so');
  const ripioCompraSo = document.getElementById('ripio-compra-so');
  const ripioVentaSo = document.getElementById('ripio-venta-so');
  const satoshiCompraSo = document.getElementById('satoshi-compra-so');
  const satoshiVentaSo = document.getElementById('satoshi-venta-so');
  const tiendaCompraSo = document.getElementById('tienda-compra-so');
  const tiendaVentaSo = document.getElementById('tienda-venta-so');

  bitsoCompraSo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaSo.innerHTML = `$` + data.bitso.totalBid;
  buenbitCompraSo.innerHTML = `$` + data.buenbit.totalAsk;
  buenbitVentaSo.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraSo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaSo.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraSo.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaSo.innerHTML = `$` + data.fiwind.totalBid;
  ftxCompraSo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaSo.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraSo.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaSo.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraSo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaSo.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraSo.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaSo.innerHTML = `$` + data.ripio.totalBid
  satoshiCompraSo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaSo.innerHTML = `$` + data.satoshitango.totalBid;
  tiendaCompraSo.innerHTML = `$` + data.tiendacrypto.totalAsk;
  tiendaVentaSo.innerHTML = `$` + data.tiendacrypto.totalBid;
}

// table polkadot
async function consultaCriptoPolkadot() {
  const res = await fetch('https://criptoya.com/api/dot/ars/0.1');
  const data = await res.json();
  console.log('polkadot');
  console.log(data);

  const bitsoCompraPo = document.getElementById('bitso-compra-po');
  const bitsoVentaPo = document.getElementById('bitso-venta-po');
  const buenCompraPo = document.getElementById('buen-compra-po');
  const buenVentaPo = document.getElementById('buen-venta-po');
  const mktCompraPo = document.getElementById('mkt-compra-po');
  const mktVentaPo = document.getElementById('mkt-venta-po');
  const fiwindCompraPo = document.getElementById('fiwind-compra-po');
  const fiwindVentaPo = document.getElementById('fiwind-venta-po');
  const ftxCompraPo = document.getElementById('ftx-compra-po');
  const ftxVentaPo = document.getElementById('ftx-venta-po');
  const lemonCompraPo = document.getElementById('lemon-compra-po');
  const lemonVentaPo = document.getElementById('lemon-venta-po');
  const letsbitCompraPo = document.getElementById('letsbit-compra-po');
  const letsbitVentaPo = document.getElementById('letsbit-venta-po');
  const ripioCompraPo = document.getElementById('ripio-compra-po');
  const ripioVentaPo = document.getElementById('ripio-venta-po');
  const satoshiCompraPo = document.getElementById('satoshi-compra-po');
  const satoshiVentaPo = document.getElementById('satoshi-venta-po');

  bitsoCompraPo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaPo.innerHTML = `$` + data.bitso.totalBid;
  buenCompraPo.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaPo.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraPo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaPo.innerHTML = `$` + data.cryptomkt.totalBid;
  fiwindCompraPo.innerHTML = `$` + data.fiwind.totalAsk;
  fiwindVentaPo.innerHTML = `$` + data.fiwind.totalBid;
  ftxCompraPo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaPo.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraPo.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaPo.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraPo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaPo.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraPo.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaPo.innerHTML = `$` + data.ripio.totalBid;
  satoshiCompraPo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaPo.innerHTML = `$` + data.satoshitango.totalBid;
}

// table litecoin
async function consultaCriptoLitecoin() {
  const res = await fetch('https://criptoya.com/api/ltc/ars/0.1');
  const data = await res.json();
   console.log('litecoin');
  console.log(data);

  const bitsoCompraLi = document.getElementById('bitso-compra-li');
  const bitsoVentaLi = document.getElementById('bitso-venta-li');
  const budaCompraLi = document.getElementById('buda-compra-li');
  const budaVentaLi = document.getElementById('buda-venta-li');
  const mktCompraLi = document.getElementById('mkt-compra-li');
  const mktVentaLi = document.getElementById('mkt-venta-li');
  const ftxCompraLi = document.getElementById('ftx-compra-li');
  const ftxVentaLi = document.getElementById('ftx-venta-li');
  const latamexCompraLi = document.getElementById('latamex-compra-li');
  const latamexVentaLi = document.getElementById('latamex-venta-li');
  const letsbitCompraLi = document.getElementById('letsbit-compra-li');
  const letsbitVentaLi = document.getElementById('letsbit-venta-li');
  const ripioCompraLi = document.getElementById('ripio-compra-li');
  const ripioVentaLi = document.getElementById('ripio-venta-li');
  const satoshiCompraLi = document.getElementById('satoshi-compra-li');
  const satoshiVentaLi = document.getElementById('satoshi-venta-li');

  bitsoCompraLi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaLi.innerHTML = `$` + data.bitso.totalBid;
  budaCompraLi.innerHTML = `$` + data.buda.totalAsk;
  budaVentaLi.innerHTML = `$` + data.buda.totalBid;
  mktCompraLi.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaLi.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraLi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaLi.innerHTML = `$` + data.ftx.totalBid;
  latamexCompraLi.innerHTML = `$` + data.latamex.totalAsk;
  latamexVentaLi.innerHTML = `$` + data.latamex.totalBid;
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

  const buenCompraAv = document.getElementById('buen-compra-av');
  const buenVentaAv = document.getElementById('buen-venta-av');
  const mktCompraAv = document.getElementById('mkt-compra-av');
  const mktVentaAv = document.getElementById('mkt-venta-av');
  const ftxCompraAv = document.getElementById('ftx-compra-av');
  const ftxVentaAv = document.getElementById('ftx-venta-av');
  const lemonCompraAv = document.getElementById('lemon-compra-av');
  const lemonVentaAv = document.getElementById('lemon-venta-av');
  const letsbitCompraAv = document.getElementById('letsbit-compra-av');
  const letsbitVentaAv = document.getElementById('letsbit-venta-av');
  const ripioCompraAv = document.getElementById('ripio-compra-av');
  const ripioVentaAv = document.getElementById('ripio-venta-av');
  const satoshiCompraAv = document.getElementById('satoshi-compra-av');
  const satoshiVentaAv = document.getElementById('satoshi-venta-av');

  buenCompraAv.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaAv.innerHTML = `$` + data.buenbit.totalBid;
  mktCompraAv.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaAv.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraAv.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaAv.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraAv.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaAv.innerHTML = `$` + data.lemoncash.totalBid;
  letsbitCompraAv.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaAv.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraAv.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaAv.innerHTML = `$` + data.ripio.totalBid;
  satoshiCompraAv.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaAv.innerHTML = `$` + data.satoshitango.totalBid;
}

// table fantom
async function consultaCriptoFantom() {
  const res = await fetch('https://criptoya.com/api/ftm/ars/0.1');
  const data = await res.json();
  console.log('fantom');
  console.log(data);

  const bitsoCompraFa = document.getElementById('bitso-compra-fa');
  const bitsoVentaFa = document.getElementById('bitso-venta-fa');
  const buenCompraFa = document.getElementById('buen-compra-fa');
  const buenVentaFa = document.getElementById('buen-venta-fa');
  const ftxCompraFa = document.getElementById('ftx-compra-fa');
  const ftxVentaFa = document.getElementById('ftx-venta-fa');
  const lemonCompraFa = document.getElementById('lemon-compra-fa');
  const lemonVentaFa = document.getElementById('lemon-venta-fa');
  const ripioCompraFa = document.getElementById('ripio-compra-fa');
  const ripioVentaFa = document.getElementById('ripio-venta-fa');

  bitsoCompraFa.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaFa.innerHTML = `$` + data.bitso.totalBid;
  buenCompraFa.innerHTML = `$` + data.buenbit.totalAsk;
  buenVentaFa.innerHTML = `$` + data.buenbit.totalBid;
  ftxCompraFa.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaFa.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraFa.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaFa.innerHTML = `$` + data.lemoncash.totalBid;
  ripioCompraFa.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaFa.innerHTML = `$` + data.ripio.totalBid;
}

// table algoran
async function consultaCriptoAlgoran() {
  const res = await fetch('https://criptoya.com/api/algo/ars/0.1');
  const data = await res.json();
  console.log('algorand');
  console.log(data);

  const bitsoCompraAl = document.getElementById('bitso-compra-al');
  const bitsoVentaAl = document.getElementById('bitso-venta-al');
  const mktCompraAl = document.getElementById('mkt-compra-al');
  const mktVentaAl = document.getElementById('mkt-venta-al');
  const ftxCompraAl = document.getElementById('ftx-compra-al');
  const ftxVentaAl = document.getElementById('ftx-venta-al');
  const lemonCompraAl = document.getElementById('lemon-compra-al');
  const lemonVentaAl = document.getElementById('lemon-venta-al');
  const ripioCompraAl = document.getElementById('ripio-compra-al');
  const ripioVentaAl = document.getElementById('ripio-venta-al');

  bitsoCompraAl.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaAl.innerHTML = `$` + data.bitso.totalBid;
  mktCompraAl.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaAl.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraAl.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaAl.innerHTML = `$` + data.ftx.totalBid;
  lemonCompraAl.innerHTML = `$` + data.lemoncash.totalAsk;
  lemonVentaAl.innerHTML = `$` + data.lemoncash.totalBid;
  ripioCompraAl.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaAl.innerHTML = `$` + data.ripio.totalBid;
}

// table stellar
async function consultaCriptoStellar() {
  const res = await fetch('https://criptoya.com/api/xlm/ars/0.1');
  const data = await res.json();
  console.log('stellar');
  console.log(data);

  const copterCompraSt = document.getElementById('copter-compra-st');
  const copterVentaSt = document.getElementById('copter-venta-st');
  const mktCompraSt = document.getElementById('mkt-compra-st');
  const mktVentaSt = document.getElementById('mkt-venta-st');
  const letsbitCompraSt = document.getElementById('letsbit-compra-st');
  const letsbitVentaSt = document.getElementById('letsbit-venta-st');
  const satoshiCompraSt = document.getElementById('satoshi-compra-st');
  const satoshiVentaSt = document.getElementById('satoshi-venta-st');
  const vibrantCompraSt = document.getElementById('vibrant-compra-st');
  const vibrantVentaSt = document.getElementById('vibrant-venta-st');

  copterCompraSt.innerHTML = `$` + data.copter.totalAsk;
  copterVentaSt.innerHTML = `$` + data.copter.totalBid;
  mktCompraSt.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaSt.innerHTML = `$` + data.cryptomkt.totalBid;
  letsbitCompraSt.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaSt.innerHTML = `$` + data.letsbit.totalBid;
  satoshiCompraSt.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaSt.innerHTML = `$` + data.satoshitango.totalBid;
  vibrantCompraSt.innerHTML = `$` + data.vibrant.totalAsk;
  vibrantVentaSt.innerHTML = `$` + data.vibrant.totalBid;
}

// table eos
async function consultaCriptoEos() {
  const res = await fetch('https://criptoya.com/api/eos/ars/0.1');
  const data = await res.json();
  console.log('eos');
  console.log(data);

  const mktCompraEo = document.getElementById('mkt-compra-eo');
  const mktVentaEo = document.getElementById('mkt-venta-eo');

  mktCompraEo.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaEo.innerHTML = `$` + data.cryptomkt.totalBid;
}

// table ripple
async function consultaCriptoRipple() {
  const res = await fetch('https://criptoya.com/api/xrp/ars/0.1');
  const data = await res.json();
  console.log('ripple');
  console.log(data);

  const bitsoCompraRi = document.getElementById('bitso-compra-ri');
  const bitsoVentaRi = document.getElementById('bitso-venta-ri');
  const mktCompraRi = document.getElementById('mkt-compra-ri');
  const mktVentaRi = document.getElementById('mkt-venta-ri');
  const ftxCompraRi = document.getElementById('ftx-compra-ri');
  const ftxVentaRi = document.getElementById('ftx-venta-ri');
  const letsbitCompraRi = document.getElementById('letsbit-compra-ri');
  const letsbitVentaRi = document.getElementById('letsbit-venta-ri');
  const ripioCompraRi = document.getElementById('ripio-compra-ri');
  const ripioVentaRi = document.getElementById('ripio-venta-ri');
  const satoshiCompraRi = document.getElementById('satoshi-compra-ri');
  const satoshiVentaRi = document.getElementById('satoshi-venta-ri');

  bitsoCompraRi.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaRi.innerHTML = `$` + data.bitso.totalBid;
  mktCompraRi.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaRi.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraRi.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaRi.innerHTML = `$` + data.ftx.totalBid;
  letsbitCompraRi.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaRi.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraRi.innerHTML = `$` + data.ripio.totalAsk;
  ripioVentaRi.innerHTML = `$` + data.ripio.totalBid;
  satoshiCompraRi.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaRi.innerHTML = `$` + data.satoshitango.totalBid;
}

// table tron
async function consultaCriptoTron() {
  const res = await fetch('https://criptoya.com/api/trx/ars/0.1');
  const data = await res.json();
  console.log('tron');
  console.log(data);

  const bitsoCompraTr = document.getElementById('bitso-compra-tr');
  const bitsoVentaTr = document.getElementById('bitso-venta-tr');
  const mktCompraTr = document.getElementById('mkt-compra-tr');
  const mktVentaTr = document.getElementById('mkt-venta-tr');
  const ftxCompraTr = document.getElementById('ftx-compra-tr');
  const ftxVentaTr = document.getElementById('ftx-venta-tr');
  const latamexCompraTr = document.getElementById('latamex-compra-tr');
  const latamexVentaTr = document.getElementById('latamex-venta-tr');
  const ripioCompraTr = document.getElementById('ripio-compra-tr');
  const ripioVentaTr = document.getElementById('ripio-venta-tr');

  bitsoCompraTr.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaTr.innerHTML = `$` + data.bitso.totalBid;
  mktCompraTr.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaTr.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraTr.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaTr.innerHTML = `$` + data.ftx.totalBid;
  latamexCompraTr.innerHTML = `$` + data.ftx.totalAsk;
  latamexVentaTr.innerHTML = `$` + data.ftx.totalBid;
  ripioCompraTr.innerHTML = `$` + data.ftx.totalAsk;
  ripioVentaTr.innerHTML = `$` + data.ftx.totalBid;
}

// table dogecoin
async function consultaCriptoDogecoin() {
  const res = await fetch('https://criptoya.com/api/doge/ars/0.1');
  const data = await res.json();
  console.log('dogecoin');
  console.log(data);

  const bitsoCompraDo = document.getElementById('bitso-compra-do');
  const bitsoVentaDo = document.getElementById('bitso-venta-do');
  const ftxCompraDo = document.getElementById('ftx-compra-do');
  const ftxVentaDo = document.getElementById('ftx-venta-do');
  const letsbitCompraDo = document.getElementById('letsbit-compra-do');
  const letsbitVentaDo = document.getElementById('letsbit-venta-do');
  const ripioCompraDo = document.getElementById('ripio-compra-do');
  const ripioVentaDo = document.getElementById('ripio-venta-do');
  const satoshiCompraDo = document.getElementById('satoshi-compra-do');
  const satoshiVentaDo = document.getElementById('satoshi-venta-do');


  bitsoCompraDo.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaDo.innerHTML = `$` + data.bitso.totalBid;
  ftxCompraDo.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaDo.innerHTML = `$` + data.ftx.totalBid;
  letsbitCompraDo.innerHTML = `$` + data.letsbit.totalAsk;
  letsbitVentaDo.innerHTML = `$` + data.letsbit.totalBid;
  ripioCompraDo.innerHTML = `$` + data.ftx.totalAsk;
  ripioVentaDo.innerHTML = `$` + data.ftx.totalBid;
  satoshiCompraDo.innerHTML = `$` + data.satoshitango.totalAsk;
  satoshiVentaDo.innerHTML = `$` + data.satoshitango.totalBid;
}

// table shiba inu
async function consultaCriptoShibaInu() {
  const res = await fetch('https://criptoya.com/api/shib/ars/0.1');
  const data = await res.json();
  console.log('shiba inu');
  console.log(data);

  const bitsoCompraSh = document.getElementById('bitso-compra-sh');
  const bitsoVentaSh = document.getElementById('bitso-venta-sh');
  const mktCompraSh = document.getElementById('mkt-compra-sh');
  const mktVentaSh = document.getElementById('mkt-venta-sh');
  const ftxCompraSh = document.getElementById('ftx-compra-sh');
  const ftxVentaSh = document.getElementById('ftx-venta-sh');
  const ripioCompraSh = document.getElementById('ripio-compra-sh');
  const ripioVentaSh = document.getElementById('ripio-venta-sh');

  bitsoCompraSh.innerHTML = `$` + data.bitso.totalAsk;
  bitsoVentaSh.innerHTML = `$` + data.bitso.totalBid;
  mktCompraSh.innerHTML = `$` + data.cryptomkt.totalAsk;
  mktVentaSh.innerHTML = `$` + data.cryptomkt.totalBid;
  ftxCompraSh.innerHTML = `$` + data.ftx.totalAsk;
  ftxVentaSh.innerHTML = `$` + data.ftx.totalBid;
  ripioCompraSh.innerHTML = `$` + data.ftx.totalAsk;
  ripioVentaSh.innerHTML = `$` + data.ftx.totalBid;
}

consultaCriptoBitcoin();
consultaCriptoEthereum();
consultaCriptoCardano();
consultaCriptoBnb();
consultaCriptoSolana();
consultaCriptoPolkadot();
consultaCriptoLitecoin();
consultaCriptoAvalanche();
consultaCriptoFantom();
consultaCriptoAlgoran();
consultaCriptoStellar();
consultaCriptoEos();
consultaCriptoRipple();
consultaCriptoTron();
consultaCriptoDogecoin();
consultaCriptoShibaInu();