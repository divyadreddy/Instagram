jQuery ->
    $(window).scroll ->
        if $(window).scrollTop() > $(document).height() - $(window).height() 
            alert "near bottom"