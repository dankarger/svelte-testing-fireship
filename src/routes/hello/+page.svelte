<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    import {page} from '$app/stores'
</script>


{data.text}

{$page.data.text}