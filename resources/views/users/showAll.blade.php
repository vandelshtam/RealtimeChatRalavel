<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Show users') }}
        </h2>
    </x-slot>

    
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    Users
                </div>
            </div>
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="card-body">
                        <ul id="users">
    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

</x-app-layout>

@push('scripts')

<script>
    window.axios.get('/api/users')
        .then((response) => {
            const usersElement = document.getElementById('users');
            let users = response.data;
            users.forEach((user, index) => {
                let element = document.createElement('li');
                element.setAttribute('id', user.id);
                element.innerText = user.name;
                usersElement.appendChild(element);
            });
        });
</script>

<script>
    Echo.channel('users')
        .listen('UserCreated', (e) => {
            const usersElement = document.getElementById('users');
            let element = document.createElement('li');
            element.setAttribute('id', e.user.id);
            element.innerText = e.user.name;
            usersElement.appendChild(element);
        })
        .listen('UserUpdated', (e) => {
            const element = document.getElementById(e.user.id);
            element.innerText = e.user.name;
        })
        .listen('UserDeleted', (e) => {
            const element = document.getElementById(e.user.id);
            element.parentNode.removeChild(element);
        });
</script>
@endpush
