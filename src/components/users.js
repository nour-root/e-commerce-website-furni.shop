let users = (user) => {
  return `<div class="swiper-slide text-dark-color space-y-3">
            <div id="client-card" class="grid gap-8 max-w-[750px] m-auto items-center sm:grid-cols-2 sm:text-left">
              <img src="${user.image}" class="max-w-[275px] m-auto" alt="user-1">
              <div class="space-y-2">
                <p class="text-light italic">${user.description}</p>
                <h4 class="text-2xl font-medium">${user.name}</h4>
                <h5 class="text-[1rem] font-medium">${user.job}</h5>
              </div>
            </div>
          </div>`;
};
export default users;
