var client;

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
console.log("hello world");
client.on("message", (topic, payload) => {
  console.log("Received { topic:" + topic + "; payload: " + payload + " }");
  switch (topic) {
    case "smoke/sensor":
      if (payload==1){
        $("#grocerry").css("visibility", "hidden").val(payload);
      }else{
        $(this).children("#grocerry").css("visibility", "visible").val(payload);
      }
      break;
  }
});
client.subscribe({
  "smoke/sensor": { qos: 0 },
  // "amabel": { qos: 0 },
  // "rosedaine": { qos: 0 },
  // "pasores/temperature": { qos: 0 },
  // "sample": { qos: 0 },
  // "renzyclaire": { qos: 0 },
  // "Luz-Ian/temp": { qos: 0 },
  
});