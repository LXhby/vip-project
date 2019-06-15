<template>
  <div class="servercenter">
    <CommonBottom></CommonBottom>
    <CourseName></CourseName>
  </div>
</template>

<script>
import CommonBottom from '../../component/common_bottom'
import CourseName from '../../component/course_name'
export default {
    name:'ServerCenter',
    components: {
        CommonBottom,
        CourseName
    }
};
</script>

<style lang="scss" scoped>
</style>