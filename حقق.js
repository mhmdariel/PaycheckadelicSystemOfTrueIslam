(() => {
  const { stdout } = process;

  const writeQaf = () => {
    if (stdout.write('ق')) {
      setImmediate(writeQaf);
    } else {
      stdout.once('drain', writeQaf);
    }
  };

  stdout.write('ح', writeQaf);
})();
