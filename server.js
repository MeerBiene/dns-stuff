let named = require('./node_modules/named/lib/index');
let server = named.createServer();
let ttl = 300;
let PORT;
process.argv.forEach(i => { if (i.toUpperCase().includes('PORT=')) PORT = parseInt(i.replace('PORT=', '')); else PORT = 9053 }); 

server.listen(PORT, '127.0.0.53', function() {
  console.log('DNS server started on port ' + PORT);
});


server.on('query', function(query) {
  console.log('raw query: ', query)
  let domain = query.name();
  console.log('DNS Query: %s', domain)

  query.addAnswer(domain, new named.SOARecord(domain, {serial: 12345, ttl }));
  query.addAnswer( domain, new named.ARecord( '192.168.178.33', ttl ) );
  server.send(query);
});

server.on('error', function(e) {
  console.log('server error', e);
});