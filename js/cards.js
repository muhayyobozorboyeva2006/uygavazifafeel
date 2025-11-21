let postsdom = document.getElementById("Posts")
let Albumsdom = document.getElementById("Albums")
let Tasksdom = document.getElementById("Tasks")

getAllData(`users/${id}/posts`, (res) => {
    console.log(res);
res.map((el) => {
    postsdom.innerHTML += `
 <div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 
 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"><div class="relative aspect-square 
  h-[250px]  bg-gray-100"><img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=1080" 
  alt="qui est esse" class="w-full h-[250px] object-cover"></div><div data-slot="card-content" class="[&amp;:last-child]:pb-6 p-4 space-y-3"><div class="flex items-center
   justify-between">
   <div class="flex items-center gap-4"><button class="transition-transform hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-6 w-6 text-gray-900" 
    aria-hidden="true"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
    </button><button class="transition-transform hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle h-6 w-6 text-gray-900" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></button>
    <button class="transition-transform hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 h-6 w-6 text-gray-900" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg></button></div>
    <button class="transition-transform hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark h-6 w-6 text-gray-900" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button></div><p class="text-gray-900">269 likes</p><div><p class="text-gray-900"><span class="mr-2">Bret</span><span class="text-gray-900">Qui est esse</span></p>
    <p class="text-gray-600 mt-1">${el.body}</p></div><button class="text-gray-500">${el.title}</button></div></div>
    `
})
})