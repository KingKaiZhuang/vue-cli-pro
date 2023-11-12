<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="/newpage/a" class="list-group-item list-group-item-action">
                    The link item A
                </router-link>
                <router-link to="/newpage/b" class="list-group-item list-group-item-action">
                    The link item B
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
