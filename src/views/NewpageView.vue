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
                <router-link to="/newpage/namedview/c2a" class="list-group-item list-group-item-action">
                    The link item C2A
                </router-link>
                <router-link to="/newpage/namedview/a2c" class="list-group-item list-group-item-action">
                    The link item A2C
                </router-link>
                <router-link to="/newpage/dynamicRouter" class="list-group-item list-group-item-action">
                    The link item DynamicRouter
                </router-link>
                <router-link to="/newpage/dynamicRouterByProps" class="list-group-item list-group-item-action">
                    The link item DynamicRouterByProps
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
