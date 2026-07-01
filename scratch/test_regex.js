const opts = ['k. p. krishnan', 'ketan dalal', 'j. ranganayakulu', 'bobby parikh'];
console.log(opts.filter(o => /[\u03c0\u221a\u00b2\u00b3\u2074\u00b9]/.test(o) || /\d+[a-z]\d*/.test(o.toLowerCase().trim())).length);
