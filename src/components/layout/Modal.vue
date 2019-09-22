    <template>
      <div class="modal" v-show="value">
        <div class="container whiteForm">
         <h2>hi</h2>
          <button @click.prevent="close" class="mt-3 border-b border-teal font-semibold">Close</button>
        </div>
      </div>
    </template>
    
    <script>
        export default {
            name: 'Modal',
            props: {
                value: {
                    required: true
                }
            },
              methods: {
                close() {
                  this.$emit("input", !this.value);
                }            
            }
        };
    </script>
    
    
    <style scoped>
        .modal {
          background-color: rgba(0, 0, 0, 0.7);
        }
      .whiteForm{
        background: #f4f4f4;
        opacity: 0.9;
        width: 40%;
        border-radius:10px;
        padding: 3%;
    }
    </style>