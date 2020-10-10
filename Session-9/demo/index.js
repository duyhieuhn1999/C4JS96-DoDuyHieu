async function load() {
    const conn = await fetch(` https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0Hx5fyTVEf2b3p2kFuvMzSgZUioay5RNYa-h0JjNH19_ulHGHjUsub-2U `) ;
    const data = await conn.json();
    console.log(data);
    console.log(data.abilities[2]);
}
load();