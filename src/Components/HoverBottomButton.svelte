<script>
  import { open } from '../stores.js';

	let visible;

  const openModal = () => open.update(flg => !flg)
  const unsubscribe = open.subscribe(value => visible = value)

  $: button = !visible ? 'open' : 'close';
  $: label = !visible ? 'ReadMe' : '×' ;

</script>

<button class={`font-nunito button ${button}`} on:click={openModal}>{label}</button>

<style>
button {
  min-width: 45px;
  min-height: 45px;
  color: #54546c;
  font-weight: bold;
  line-height: 1rem;
  margin: 0;
  border:none;
  position: absolute;
  bottom: 3%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 3%);
  text-decoration: none;
  cursor: pointer;
}

.open {
  font-size: 1rem;
  padding: .8rem 3rem;
  border-radius: 2rem;
  box-shadow: 0 .15rem .9rem rgba(0, 0, 0, .4);
  background-color: #fff1b9;
}

.close {
  font-size: 1.5rem;
  padding: 0;
  border-radius: 10rem;
  background-color: #fff1b9;
  box-shadow: 0 .1rem .4rem rgba(0, 0, 0, .8);
}

</style>