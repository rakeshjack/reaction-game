<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
            <div class="actions">
                <slot name="lists"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop {
        top:0;
        position:fixed;
        background: rgba(0,0,0,0.5);
        width:100%;
        height: 100%;
    }
    h1 {
        color:#03cfb4;
        border:none;
        padding:0;
    }
    
    .sale {
        background: crimson;
        color: white;
    }

    .sale h1 {
        color:white;
        background: crimson;
    }
    .modal .actions {
        text-align: center;
        margin:30px 0 10px 0;
    }

    .modal .actions a {
        padding: 8px;
        border: 1px solid black;
        border-radius: 4px;
        text-decoration: none;
        margin:10px;
    }
</style>