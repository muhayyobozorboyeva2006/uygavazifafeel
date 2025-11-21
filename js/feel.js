
let card = document.getElementById("card");
let paginaton = document.getElementById("paginton")
let pages = 0

async function getData(page=1){
    try{
        let users = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=10`)   
             
        let usersData = await users.json()
        let postsAll = await fetch("https://jsonplaceholder.typicode.com/posts") 
        let postsDataAll = await postsAll.json()
       pages = Math.ceil(postsDataAll.length/10);
        console.log(pages);
        paginaton.innerHTML = ""
 paginaton.innerHTML += `
   <li>
      <button onClick="Previous(${page})"
    class=" flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium 
    hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
                            </button>
 `

      for(let i=1 ; i<= pages ; i++){
        console.log(i);
        
        paginaton.innerHTML += `
         <li>
             <button 
             onClick="changePage(${i})"
           class="flex items-center justify-center text-body bg-neutral-secondary-medium
            box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 
            focus:outline-none">${i}</button>
                            </li>
        `
        
      }
     
      paginaton.innerHTML += `
         <li>
         <button onClick="next(${page})"
          class="  flex items-center justify-center text-body bg-neutral-secondary-medium
           box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading 
           font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</button>
                            </li>
      `
       
                     
        card.innerHTML = ""
        usersData.map((el) => {
            console.log(el);
            
            card.innerHTML += `
         <div data-slot="card"
                                class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-sm overflow-hidden">
                                <div data-slot="card-header"
                                    class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 border-b border-gray-100">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-3"><span data-slot="avatar"
                                                class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-10 w-10"><span
                                                    data-slot="avatar-fallback"
                                                    class="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white">L</span></span>
                                            <div>
                                             <p class="text-gray-900">${el.id}</p>
                                                <p class="text-gray-900">Leanne Graham</p>
                                                <p class="text-gray-500">@Bret</p>
                                            </div>
                                        </div><button data-slot="button"
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 rounded-md"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-ellipsis h-5 w-5 text-gray-600"
                                                aria-hidden="true">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg></button>
                                    </div>
                                </div>
                                <div class="relative aspect-square h-[250px] bg-gray-100 cursor-pointer"><img
                                        src="https://images.unsplash.com/photo-1623113758911-db913c487b71?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=1080"
                                        alt="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                                        class="w-full h-[250px] object-cover"></div>
                                <div data-slot="card-content" class="[&amp;:last-child]:pb-6 p-4 space-y-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center gap-4"><button
                                                class="transition-transform hover:scale-110"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-heart h-6 w-6 text-gray-900" aria-hidden="true">
                                                    <path
                                                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5">
                                                    </path>
                                                </svg></button><button class="transition-transform hover:scale-110"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-message-circle h-6 w-6 text-gray-900" aria-hidden="true">
                                                    <path
                                                        d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">
                                                    </path>
                                                </svg></button><button class="transition-transform hover:scale-110"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="lucide lucide-share2 lucide-share-2 h-6 w-6 text-gray-900"
                                                    aria-hidden="true">
                                                    <circle cx="18" cy="5" r="3"></circle>
                                                    <circle cx="6" cy="12" r="3"></circle>
                                                    <circle cx="18" cy="19" r="3"></circle>
                                                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                                </svg></button></div><button class="transition-transform hover:scale-110"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="lucide lucide-bookmark h-6 w-6 text-gray-900"
                                                aria-hidden="true">
                                                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                                            </svg></button>
                                    </div>
                                    <p class="text-gray-900">156 likes</p>
                                    <div>
                                        <p class="text-gray-900"><span class="mr-2">${el.title}</span><span
                                                class="text-gray-900 line-clamp-1">Sunt aut facere</span></p>
                                        <p class="text-gray-600 mt-1 line-clamp-2">${el.body}</p>
                                    </div><button class="text-gray-500">View all 35 comments</button>
                                    <p class="text-gray-400">2 days ago</p>
                                </div>
                            </div>

            `
        })
       
        
    }catch (err){
        console.log(err);
        
    }
    
}
getData()

function changePage(i){
    getData(i)  
}

function next(page) {

    getData(page+1)
}

function Previous(page) {
    getData(page - 1)
}