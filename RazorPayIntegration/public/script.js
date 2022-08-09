var amount = document.querySelector("#amount");
var options = {
  key: "rzp_test_KJmagTF42c7VFc",
  amount: "50",
  currency: "INR",
  name: "Dummy Academy",
  description: "Pay & Checkout this Course, Upgrade your DSA Skill",
  image:
    "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png",
  order_id: orderId,
  handler: function (e) {
    alert("Payment Is Succesfull");
  },
  prefill: {
    contact: "9876543210",
    name: "Twinkle Sharma",
    email: "smtwinkle@gmail.com",
  },
  notes: {
    description: "Best Course for SDE placements",
    language: "Available in 4 major Languages JAVA, C/C++, Python, Javascript",
    access: "This course have Lifetime Access",
  },
  theme: {
    color: "#2300a3",
  },
};

document.getElementById("orderId").onclick = async function (e) {
  await fetch("http://localhost:3000/createOrder", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: "500",
    }),
  })
    .then((e) => {
      return e.json();
    })
    .then((data) => {
      options.amount = `${data.amount}`;
      options.order_id = data.id;
      razorpayObject = new Razorpay(options);
    })
    .catch((e) => {
      console.log("Error Occured", e);
    });
  razorpayObject.open();
};

razorpayObject = new Razorpay(options);
razorpayObject.on("payment.failed", function (response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});
