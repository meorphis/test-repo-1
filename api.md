# Pets

Types:

```python
from meorphis_test_9.types import Pet, Pets
```

Methods:

- <code title="post /pets">client.pets.<a href="./src/meorphis_test_9/resources/pets.py">create</a>(\*\*<a href="src/meorphis_test_9/types/pet_create_params.py">params</a>) -> None</code>
- <code title="get /pets/{petId}">client.pets.<a href="./src/meorphis_test_9/resources/pets.py">retrieve</a>(pet_id) -> <a href="./src/meorphis_test_9/types/pet.py">Pet</a></code>
- <code title="get /pets">client.pets.<a href="./src/meorphis_test_9/resources/pets.py">list</a>(\*\*<a href="src/meorphis_test_9/types/pet_list_params.py">params</a>) -> <a href="./src/meorphis_test_9/types/pets.py">Pets</a></code>
