const triangle =6
for (let i = 0; i < triangle; i++) {
    let lvl = '';
    for (let j = 0; j <= i; j++) {
        lvl += '*';
    }
    console.log(lvl);
}