var channels=["Freecodecamp","Sneaky","Imaqtpie","Tsm_dyrus","Grimmmz","Anthony_kongphan","Cowsep","Sp4zie","Nightblue3","brunofin","Summit1g","comster404"];

function newDiv(channel)
{
	var url1 = "https://wind-bow.gomix.me/twitch-api/channels/"+channel+"?callback=?";
		$.getJSON (url1,
			function(dato)
			{
				if(dato.status==404)
				{
					dier=$("<div class='dier'></div>");
					$(dier).html("<b style='background-color:white;color:red'>"+channel+"</b>"+"<br>This channel no longer exists or has never existed!");
					$("#container").append(dier);
				}
				else
				{
					var url = "https://wind-bow.gomix.me/twitch-api/streams/"+channel+"?callback=?";
					$.getJSON (url,
						function(data)
						{	
							if(data.stream===null)
							{
								dinull=$("<div class='dinull'></div>");
								$(dinull).html("<b style='background-color:grey'>"+channel+"</b>"+"<br> Offline");
								$("#container").append(dinull);
							}
							else
							{
								game=data.stream.game;
								viewers=data.stream.viewers;
								quote=data.stream.channel.status;

								di=$("<div class='di'></div>");
								$(di).html("<a target='_blank' href='"+data.stream.channel.url+"'>"+"<b style='background-color:lightgrey;color:black'>"+channel+"</a>"+"</b>"+"<br>"+game+"<br>"+viewers+" viewers<br>"+'"'+quote+'"');
								$("#container").append(di);
							}
						}
					);
				}
			}
		);
}

function getChannels()
{	
	channels.forEach(function(channel)
	{
		newDiv(channel);
	});
}

function newCha()
{
	val=$("#cha").val();
	newDiv(val);
}

function live()
{
	$(".dinull").hide();
	$(".dier").hide();
}

function all()
{
	$(".dinull").show();
	$(".dier").hide();
}

function hideEr()
{
	$(".dier").hide();
}

$(document).ready(function(){
	getChannels();
	$("#cha").keypress(function(e){
		if(e.which == 13)
		{
			newCha();
		}
	});	

	$(window).on('click',function(){
		hideEr();
	});
	$("#all").on('click',function(){
		all();
	});
	$("#live").on('click',function(){
		live();
	});		
	setTimeout(function(){history.go(0);},600000);
});