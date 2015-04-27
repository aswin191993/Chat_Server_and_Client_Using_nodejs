var users=[],i=0,name='';
const net = require('net'),
server=net.createServer(function (conn) {
	i=(users.length)+1;
	users.push([conn,"User"+i]);
	conn.write("WELCOME!\nHave a nice chat \n");
	chat("Created!\n",conn);
	function chat(say,unk) {
		for(var c=0;c < users.length;c+=1){
			if(unk == users[c][0]){
				name=users[c][1];
			}
		}
		for(var c=0;c < users.length;c+=1){
			if(unk == users[c][0]);
			else{
				users[c][0].write(name+":"+say);
			}
		}
	};
	conn.on('end', function () {
		chat(" left the chat.\n",conn);
		for(var c=0;c < users.length;c+=1){
			if(conn == users[c][0]){
				users.splice (c,1);
			}
		}
	});
	conn.on('data', function (data) {
		conn.write("me:");		
		chat(data, conn);		
	});
});

server.listen(5432,function(){
	console.log("chat Server activated!");
});
