<script type="text/javascript">
        $(document).ready(function () {
            $(':text').each(function () {
                var name = $(this).attr('name');            

                if ($.cookie(name) != null) {                   
                        $(this).val($.cookie(name));                   
                };

                $(this).on('change', function () {
                    $.cookie(name, $(this).val());
                });
            });
        });
</script>
