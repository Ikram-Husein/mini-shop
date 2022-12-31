const mobile_filter_btn = document.querySelector(".mobile_filter_btn"),
	filter_btn = document.querySelector(".filter_btn"),
	mobile_siderbar = document.querySelector("#mobile_siderbar"),
	focus_filter = document.querySelector(".focus_filter"),
	overlay = document.querySelector("#overlay"),
	body = document.querySelector("body");

filter_btn.addEventListener("click", () => {
  mobile_siderbar.style.visibility = 'visible';
  mobile_siderbar.style.transition = "0.2s";
	mobile_siderbar.style.right = "0";
	focus_filter.style.borderColor = "#f43f5e";
	overlay.style.visibility = "visible";
});

mobile_filter_btn.addEventListener("click", () => {
	mobile_siderbar.style.visibility = "hidden";
	mobile_siderbar.style.transition = "0.2s";
	mobile_siderbar.style.right = "-100%";
	focus_filter.style.borderColor = "#d1d5db";
	overlay.style.visibility = "hidden";
});

overlay.addEventListener('click', () => {
	mobile_siderbar.style.visibility = "hidden";
	mobile_siderbar.style.transition = "0.2s";
	mobile_siderbar.style.right = "-100%";
	overlay.style.visibility = "hidden";
	focus_filter.style.borderColor = "#d1d5db";
})